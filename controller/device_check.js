
const device_check = (req, res) => {
    const ip = req.headers["x-forwarded-for"];
    const user_agent = req.headers["user-agent"];

    let browser_name = "不知道的瀏覽器";
    if (user_agent.indexOf("Edge") > -1) browser_name = "Edge";
    else if (user_agent.indexOf("Edg/") > -1) browser_name = "Edge(Chromium)";
    else if (user_agent.indexOf("Opr") > -1) browser_name = "Opera";
    else if (user_agent.indexOf("BRAVE") > -1 || user_agent.indexOf("Brave") > -1) browser_name = "Brave";
    else if (user_agent.indexOf("Chrome") > -1) browser_name = "Chrome";
    else if (user_agent.indexOf("Trident") > -1) browser_name = "IE";
    else if (user_agent.indexOf("Firefox") > -1) browser_name = "Firefox";
    else if (user_agent.indexOf("Safari") > -1) browser_name = "Safari";

    let device = "PC";
    let OS_name = "不知道的作業系統";
    if (user_agent.indexOf("Win") > -1) OS_name = "Windows";
    else if (
        user_agent.indexOf("Iphone") > -1 ||
        user_agent.indexOf("iPhone") > -1
    )
        (OS_name = "iOS"), (device = "手機");
    else if (user_agent.indexOf("Android") > -1)
        (OS_name = "Android"), (device = "手機");
    else if (user_agent.indexOf("Mac") > -1) OS_name = "MacOS";
    else if (user_agent.indexOf("X11") > -1) OS_name = "UNIX";
    else if (user_agent.indexOf("Linux") > -1) OS_name = "Linux";

    return res.status(200).json({
        ip: ip,
        user_agent: user_agent,
        device: device,
        browser: browser_name,
        OS: OS_name,
        message:
            "你正在使用 " +
            device +
            " 的 " +
            browser_name +
            " 瀏覽器, 作業系統則是 " +
            OS_name,
    });
}

module.exports = {
    device_check,
};