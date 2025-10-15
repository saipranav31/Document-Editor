import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import Collaboration from '@tiptap/extension-collaboration'
// Removed CollaborationCursor to avoid runtime error when awareness is undefined
import { loadDocument, saveDocument } from './api'

function App() {
  const [roomId] = useState('doc-1')

  const [initError, setInitError] = useState<string | null>(null)
  const ydoc = useMemo(() => new Y.Doc(), [])
  const provider = useMemo(() => {
    try {
      return new WebsocketProvider('ws://127.0.0.1:4000', roomId, ydoc)
    } catch (e) {
      console.error(e)
      setInitError('Failed to connect to websocket server (ws://127.0.0.1:4000).')
      return null
    }
  }, [roomId, ydoc])

  const editor = useEditor(
    provider
      ? {
          extensions: [
            StarterKit.configure({ history: false }),
            Collaboration.configure({ document: ydoc }) as any
          ],
          editorProps: { attributes: { class: 'editor' } }
        }
      : {
          extensions: [StarterKit],
          editorProps: { attributes: { class: 'editor' } }
        },
    [provider]
  )

  useEffect(() => {
    loadDocument(roomId)
      .then((doc: any) => {
        if (editor && doc && doc.content) {
          const isEmpty = JSON.stringify(editor.getJSON()) === JSON.stringify({ type: 'doc', content: [{ type: 'paragraph' }] })
          if (isEmpty) editor.commands.setContent(doc.content, false)
        }
      })
      .catch(() => {})
    const interval = setInterval(() => {
      const json = editor?.getJSON()
      if (json) void saveDocument(roomId, json)
    }, 3000)
    return () => {
      clearInterval(interval)
      provider?.destroy()
    }
  }, [editor, provider, roomId])

  return (
    <div style={{ height: '100vh', boxSizing: 'border-box', padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, position: 'sticky', top: 0, background: 'var(--bg, transparent)', paddingBottom: 8 }}>
        <button onClick={() => editor?.chain().focus().toggleBold().run()}>Bold</button>
        <button onClick={() => editor?.chain().focus().toggleItalic().run()}>Italic</button>
        <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button onClick={() => editor?.chain().focus().undo().run()}>Undo</button>
        <button onClick={() => editor?.chain().focus().redo().run()}>Redo</button>
      </div>
      {initError && <div style={{ color: 'tomato', marginBottom: 8 }}>{initError}</div>}
      {editor ? (
        <EditorContent editor={editor} />
      ) : (
        <textarea style={{ width: '100%', minHeight: 300 }} placeholder="Loading editor…" />
      )}
    </div>
  )
}

export default App
