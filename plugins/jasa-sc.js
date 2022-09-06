let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `*「 RECODED BY XWANSANO 」*

* RECODED SENDIRI LAH TUH DI BAWA BASE NYA

*Original Base From :*
_https://github.com/BochilGaming_
`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler