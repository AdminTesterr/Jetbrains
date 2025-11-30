function copyIP() {
    const ip = document.getElementById("server-ip").textContent;
    navigator.clipboard.writeText(ip);
    alert("IP copied! Use port 25770 (Port is disabled for now..)";
}
