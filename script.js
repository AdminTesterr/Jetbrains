function copyIP() {
    const ip = document.getElementById("server-ip").textContent;
    navigator.clipboard.writeText(ip);
    alert("Server IP copied!");
}
