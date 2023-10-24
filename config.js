/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Ini Buat Create Panel ygy
global.domain = 'https://kirizz.mypannelku.com'
global.apikey = 'ptla_K12Jk9nMbw6dNla52WiIixQe1KYjYJwZS0ew8iJYehv'
global.capikey = 'ptlc_3YHoGgw8ixfFal1PMbbo3edf0mqjPwhQbcWko1Ogebh'
global.domainadmin = 'https://kirizz.mypannelku.com'
global.apiadmin = 'ptla_K12Jk9nMbw6dNla52WiIixQe1KYjYJwZS0ew8iJYehv'
global.cpiadmin = 'ptlc_3YHoGgw8ixfFal1PMbbo3edf0mqjPwhQbcWko1Ogebh'
global.eggsnya = '15'
global.location = '1'

// Ini Apikey ygy
global.keyai = `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`
global.lolkey = 'haikalgans'

// ini Link Sosmed ygy
global.channel = 'https://youtube.com/@survivofc'
global.urlnya = 'https://chat.whatsapp.com/GJPWMLj7Q2ZAzoDKTaTYd6'

// Other
global.creator = "6283873494075@s.whatsapp.net"
global.owner = ['6283873494075']
global.premium = ['6283873494075']
global.packname = 'GansBOTz'
global.author = 'Deffri Gans'
global.sessionName = 'Gans'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.ddoc = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

global.flaa = global.flaa = [
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
