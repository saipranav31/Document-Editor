# 📱 Access Document Editor from Your Phone

## ✅ Configuration Complete!

Your Document Editor is now configured to accept connections from your phone and other devices on the same network.

---

## 🌐 Access URLs

### From Your Computer (Localhost):
- **Frontend**: http://localhost:5175
- **Backend**: http://localhost:4000

### From Your Phone (Same WiFi Network):
- **Frontend**: http://192.168.10.39:5175
- **Backend**: http://192.168.10.39:4000

---

## 📋 Steps to Access from Phone

### 1. Ensure Both Devices on Same WiFi
- Your computer and phone must be connected to the **same WiFi network**
- WiFi Network: Check your computer's WiFi settings
- Your computer IP: **192.168.10.39**

### 2. Check Windows Firewall (IMPORTANT!)

The connection might be blocked by Windows Firewall. You need to allow Node.js through the firewall:

**Option A: Allow through Windows Defender Firewall**
1. Open Windows Settings → Privacy & Security → Windows Security
2. Click "Firewall & network protection"
3. Click "Allow an app through firewall"
4. Click "Change settings" (requires admin)
5. Find "Node.js" in the list and check both "Private" and "Public"
6. If Node.js isn't listed, click "Allow another app" and browse to Node.js

**Option B: Create Firewall Rule (Recommended)**
Run these commands in PowerShell as Administrator:

```powershell
# Allow port 5175 (Frontend)
New-NetFirewallRule -DisplayName "Document Editor Frontend" -Direction Inbound -LocalPort 5175 -Protocol TCP -Action Allow

# Allow port 4000 (Backend)
New-NetFirewallRule -DisplayName "Document Editor Backend" -Direction Inbound -LocalPort 4000 -Protocol TCP -Action Allow
```

**Option C: Temporarily Disable Firewall (Testing Only)**
- Not recommended for security reasons
- Only use to test if firewall is the issue

### 3. Access from Phone

1. Open your phone's web browser (Chrome, Safari, etc.)
2. Type in the address bar: **http://192.168.10.39:5175**
3. Press Enter/Go

---

## 🔧 Troubleshooting

### "This site can't be reached" or "Refused to connect"

**Cause 1: Firewall Blocking**
- Solution: Follow Step 2 above to allow ports through firewall

**Cause 2: Different WiFi Networks**
- Solution: Ensure phone and computer are on the SAME WiFi network

**Cause 3: Server Not Running**
- Solution: Check that both servers are running on your computer
- You should see:
  ```
  server listening on http://0.0.0.0:4000
  Access from phone: http://192.168.10.39:4000
  
  VITE ready
  ➜  Network: http://192.168.10.39:5175/
  ```

**Cause 4: IP Address Changed**
- Your computer's IP might change after restart
- Solution: Run `ipconfig` in terminal and look for "IPv4 Address" under your WiFi adapter
- Update the URL with the new IP

### Connection Timeout
- Check if antivirus software is blocking connections
- Try accessing http://192.168.10.39:4000/health in phone browser
- If this works, the backend is accessible

### WebSocket Connection Failed
- Ensure backend is running on port 4000
- Check browser console for specific error messages

---

## 🎯 Testing Checklist

- [ ] Both servers running on computer
- [ ] Computer and phone on same WiFi network
- [ ] Windows Firewall allows ports 4000 and 5175
- [ ] Can access http://192.168.10.39:5175 from phone browser
- [ ] Editor loads and all buttons work
- [ ] Real-time collaboration works between devices

---

## 🔒 Security Notes

- This setup allows anyone on your local network to access the editor
- Do not expose these ports to the internet without proper security
- The firewall rules only allow local network access
- For production use, implement authentication and use HTTPS

---

## 💡 Features on Phone

All features work on mobile:
- ✅ All formatting buttons (Bold, Italic, etc.)
- ✅ Real-time collaboration with computer
- ✅ Touch-friendly interface
- ✅ Auto-save functionality
- ✅ Responsive design

---

## 📞 Quick Reference

| Item | Value |
|------|-------|
| Computer IP | 192.168.10.39 |
| Frontend Port | 5175 |
| Backend Port | 4000 |
| Phone URL | http://192.168.10.39:5175 |
| WiFi Network | Same as computer |

**Note**: If your computer restarts or reconnects to WiFi, the IP address might change. Run `ipconfig` to get the new IP address.
