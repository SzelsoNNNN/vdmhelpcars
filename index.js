const { Client, MessageEmbed, guild } = require('discord.js');
const { constants } = require('os');
const client = new Client();
const config = require("./config.json");
const fs = require('fs');
const prefix = "/";

const actvs = [
    "by Szelson",
    "Vice Deluxe Motorsport",
    "by Szelson",
    "Pomoc: /vdmhelp"
];

client.on('ready', (member, guild, message) => {
    console.log('Gotowy do pomocy!')

    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
    }, 15000);


})

client.on('message', (message, guild, member) => {

    const iloscPurge = message.content.slice(prefix.length).trim().split(' ');
    const purge = iloscPurge.shift().toLowerCase();
    if ((purge === 'usuwanko') && (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR')) && (iloscPurge[0] > 1 && iloscPurge[0] < 101)) {
        message.channel.bulkDelete(iloscPurge[0])
            .then(() => {
                message.channel.send('Usunięto ``' + iloscPurge[0] + '`` wiadomości')
                    .then(() => {
                        setTimeout(function() {
                            message.channel.bulkDelete(1)
                        }, 1500);
                    })
            });
    }

    const kanal = client.channels.cache.find(ch => ch.id === '776539271481524264')

    var msgD = message.content
    var msg = msgD.toLowerCase()

    if (msg.includes('admiral') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Admiral')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Admiral \n **Cena:** $12.900 \n **Marża:** $2.650 \n **Prędkość:** 170 km/h \n **Napęd na:** przód \n **Spalanie:** 12l \n\n**Nazwa:** Admiral Baur \n **Cena:** $33.000 \n **Marża:** $6.750 \n **Prędkość:** 180 km/h \n **Napęd na:** Tył \n **Spalanie:** 12l\n\n**Nazwa:** Admiral LWB \n **Cena:** $42.000 \n **Marża:** $10.750 \n **Prędkość:** 185 km/h \n **Napęd na:** Tył \n **Spalanie:** 12l\n\n**Nazwa:** Admiral Wagon \n **Cena:** $15.000 \n **Marża:** $3.750 \n **Prędkość:** 165 km/h \n **Napęd na:** Tył \n **Spalanie:** 10l')
        kanal.send(embed);
    } else if (msg.includes('alpha') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Alpha')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Alpha \n **Cena:** $38.900 \n **Marża:** $3.900 \n **Prędkość:** 175 km/h \n **Napęd na:** tył \n **Spalanie:** 7l \n\n**Nazwa:** Alpha Cabrio \n **Cena:** $48.900 \n **Marża:** $3.900 \n **Prędkość:** 175 km/h \n **Napęd na:** Tył \n **Spalanie:** 7l\n\n**Nazwa:** Alpha GT \n **Cena:** $50.000 \n **Marża:** $10.000 \n **Prędkość:** 185 km/h \n **Napęd na:** Tył \n **Spalanie:** 22l\n\n**Nazwa:** Alpha Targa \n **Cena:** $49.900 \n **Marża:** $9.900 \n **Prędkość:** 175 km/h \n **Napęd na:** Tył \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('banshe') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Banshee')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Banshee \n **Cena:** $165.000 \n **Marża:** $15.000 \n **Prędkość:** 210 km/h \n **Napęd na:** tył \n **Spalanie:** 22l \n\n**Nazwa:** Banshee Cabrio \n **Cena:** $170.000 \n **Marża:** $15.000 \n **Prędkość:** 210 km/h \n **Napęd na:** Tył \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('beagle') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Beagle')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Beagle \n **Cena:** $325.000 \n **Marża:** $30.000 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('benson') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Benson')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Benson \n **Cena:** $7.500 \n **Marża:** $1.500 \n **Prędkość:**  - \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if ((msg.includes('bf injection') || msg.includes('bfinjection')) && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu BF Injection')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** BF Injection \n **Cena:** $25.000 \n **Marża:** $2.200 \n **Prędkość:**  140 km/h \n **Napęd na:** tył \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if ((msg.includes('bf-400') || msg.includes('bf400') || msg.includes('bf 400')) && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu BF-400')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** BF-400 \n **Cena:** $18.900 \n **Marża:** $2.400 \n **Prędkość:**  140 km/h \n **Napęd na:** tył \n **Spalanie:** 9l')
        kanal.send(embed);
    } else if (msg.includes('blista') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Blista')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Blista \n **Cena:** $19.900 \n **Marża:** $2.400 \n **Prędkość:**  165 km/h \n **Napęd na:** przód \n **Spalanie:** 7l \n\n**Nazwa:** Blista GPX \n **Cena:** $28.000 \n **Marża:** $6.000 \n **Prędkość:**  180 km/h \n **Napęd na:** przód \n **Spalanie:** 7l \n\n**Nazwa:** Blista Rallye \n **Cena:** $32.000 \n **Marża:** $5.000 \n **Prędkość:**  175 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('bmx') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu BMX')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** BMX \n **Cena:** $490 \n **Marża:** $90 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('bobcat') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Bobcat')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Bobcat \n **Cena:** $9.900 \n **Marża:** $1.000 \n **Prędkość:**  140 km/h \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('boxville') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Boxville')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Boxville \n **Cena:** $16.000 \n **Marża:** $2.000 \n **Prędkość:**  110 km/h \n **Napęd na:** wszystkie \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('bravura') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Bravura')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Bravura \n **Cena:** $4.100 \n **Marża:** $400 \n **Prędkość:**  150 km/h \n **Napęd na:** przód \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('buccaner') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Buccaner')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Buccaner \n **Cena:** $14.900 \n **Marża:** $2.100 \n **Prędkość:**  170 km/h \n **Napęd na:** tył \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('buffalo') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Buffalo')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Buffalo \n **Cena:** $105.000 \n **Marża:** $9.100 \n **Prędkość:**  190 km/h \n **Napęd na:** tył \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('bullet') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Bullet')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Bullet \n **Cena:** $190.000 \n **Marża:** $20.000 \n **Prędkość:** 210 km/h \n **Napęd na:** tył \n **Spalanie:** 22l \n\n**Nazwa:** Bullet GT \n **Cena:** $215.000 \n **Marża:** $25.000 \n **Prędkość:** 230 km/h \n **Napęd na:** Tył \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('burrito') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Burrito')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Burrito \n **Cena:** $21.500 \n **Marża:** $3.000 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** 16l')
        kanal.send(embed);
    } else if (msg.includes('cabbie') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Cabbie')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Cabbie Capacious Taxi \n **Cena:** $13.000 \n **Marża:** $1.500 \n **Prędkość:**  -  \n **Napęd na:** - \n **Spalanie:** - \n\n**Nazwa:** Cabbie Cossy Taxi\n **Cena:** $13.000 \n **Marża:** $1.500 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** - \n\n**Nazwa:** Cabbie Taxi \n **Cena:** $11.000 \n **Marża:** $1.000 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('camper') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Camper')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Camper \n **Cena:** $37.900 \n **Marża:** $2.900 \n **Prędkość:**  - \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('cheetah') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Cheetah')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Cheetah \n **Cena:** $190.000 \n **Marża:** $20.000 \n **Prędkość:** 200 km/h \n **Napęd na:** tył \n **Spalanie:** 22l \n\n**Nazwa:** Cheetah GT \n **Cena:** $210.000 \n **Marża:** $20.000 \n **Prędkość:** 210 km/h \n **Napęd na:** tył \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('club') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Club')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Club \n **Cena:** $18.500 \n **Marża:** $2.500 \n **Prędkość:** 160 km/h \n **Napęd na:** przód \n **Spalanie:** 7l \n\n**Nazwa:** Club Cabrio \n **Cena:** $30.000 \n **Marża:** $7.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -\n\n**Nazwa:** Club Hardtop \n **Cena:** $28.000 \n **Marża:** $5.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -\n\n**Nazwa:** Club Rallye \n **Cena:** $24.000 \n **Marża:** $6.000 \n **Prędkość:** - \n **Napęd na:** wszystkie \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('comet') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Comet')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Comet \n **Cena:** $110.000 \n **Marża:** $8.000 \n **Prędkość:** 190 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l \n\n**Nazwa:** Comet Cabrio \n **Cena:** $116.000 \n **Marża:** $8.000 \n **Prędkość:** 190 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l\n\n**Nazwa:** Comet GT \n **Cena:** $122.000 \n **Marża:** $8.000 \n **Prędkość:** 190 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l\n\n**Nazwa:** Comet Targa \n **Cena:** $118.000 \n **Marża:** $10.000 \n **Prędkość:** 190 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('cropduster') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Cropduster')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Cropduster \n **Cena:** $115.000 \n **Marża:** $10.000 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if ((msg.includes('dft30') || msg.includes('dft 30')) && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu DFT30')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** DFT30 \n **Cena:** $38.900 \n **Marża:** $3.900 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('deluxo') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Deluxo')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Deluxo \n **Cena:** $100.000 \n **Marża:** $10.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** 7l \n\n**Nazwa:** Deluxo X \n **Cena:** $102.000 \n **Marża:** $7.000 \n **Prędkość:** 195 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if ((msg.includes('dodo') || msg.includes('dft 30')) && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Dodo')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Dodo \n **Cena:** $180.000 \n **Marża:** $30.000 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('dubsta') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Dubsta')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Dubsta \n **Cena:** $103.000 \n **Marża:** $14.000 \n **Prędkość:** - \n **Napęd na:** wszystkie \n **Spalanie:** - \n\n**Nazwa:** Dubsta Convertible \n **Cena:** $108.000 \n **Marża:** $17.000 \n **Prędkość:** 150 km/h \n **Napęd na:** wszystkie \n **Spalanie:** -\n\n**Nazwa:** Dubsta LWB \n **Cena:** $180.000 \n **Marża:** $28.000 \n **Prędkość:** 150 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l\n\n**Nazwa:** Dubsta Offroad \n **Cena:** $120.000 \n **Marża:** $20.000 \n **Prędkość:** 150 km/h \n **Napęd na:** wszystkie \n **Spalanie:** -')
        kanal.send(embed);
    } else if ((msg.includes('elegant') || msg.includes('dft 30')) && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Elegant')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Elegant \n **Cena:** $27.900 \n **Marża:** $2.990 \n **Prędkość:**  170 km/h \n **Napęd na:** tył \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('elegy') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Elegy')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Elegy \n **Cena:** $92.500 \n **Marża:** $10.500 \n **Prędkość:** 180 km/h \n **Napęd na:** tył \n **Spalanie:** 22l \n\n**Nazwa:** Elegy Cabrio \n **Cena:** $105.000 \n **Marża:** $15.000 \n **Prędkość:** 180 km/h \n **Napęd na:** tył \n **Spalanie:** 22l\n\n**Nazwa:** Elegy RH8 \n **Cena:** $130.000 \n **Marża:** $35.000 \n **Prędkość:** 195 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 24l\n\n**Nazwa:** Elegy VR35 \n **Cena:** $120.000 \n **Marża:** $23.000 \n **Prędkość:** 195 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 24l')
        kanal.send(embed);
    } else if (msg.includes('emperor') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Emperor')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Emperor \n **Cena:** $10.000 \n **Marża:** $3.500 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('euros') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Euros')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Euros \n **Cena:** $35.500 \n **Marża:** $3.500 \n **Prędkość:** 170 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 12l \n\n**Nazwa:** Euros Cabrio \n **Cena:** $45.900 \n **Marża:** $3.900 \n **Prędkość:** 170 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 12l\n\n**Nazwa:** Euros Targa \n **Cena:** $40.900 \n **Marża:** $3.900 \n **Prędkość:** 170 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 12l\n\n**Nazwa:** Euros Turbo \n **Cena:** $55.000 \n **Marża:** $10.000 \n **Prędkość:** 180 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('faggio') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Faggio')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Faggio \n **Cena:** $990 \n **Marża:** $90 \n **Prędkość:**  licznika brakuje \n **Napęd na:** tył \n **Spalanie:** 3,5l')
        kanal.send(embed);
    } else if ((msg.includes('fcr-900') || msg.includes('fcr 900') || msg.includes('fcr')) && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu FCR-900')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** FCR-900 \n **Cena:** $45.000 \n **Marża:** $4.500 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** 9l')
        kanal.send(embed);
    } else if (msg.includes('feltzer') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Feltzer')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Feltzer \n **Cena:** $30.000 \n **Marża:** $3.000 \n **Prędkość:**  170 km/h \n **Napęd na:** tył \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('flash') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Flash')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Flash \n **Cena:** $39.000 \n **Marża:** $3.500 \n **Prędkość:** 165 km/h \n **Napęd na:** przód \n **Spalanie:** 7l \n\n**Nazwa:** Flash GT \n **Cena:** $46.000 \n **Marża:** $4.000 \n **Prędkość:** 180 km/h \n **Napęd na:** przód \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('fortune') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Fortune')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Fortune \n **Cena:** $8.900 \n **Marża:** $1.000 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 7l \n\n**Nazwa:** Fortune Type S \n **Cena:** $13.000 \n **Marża:** $3.000 \n **Prędkość:** 170 km/h \n **Napęd na:** wszystkie \n **Spalanie:** -')
        kanal.send(embed);
    } else if ((msg.includes('freeway') || msg.includes('freway')) && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Freeway')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Freeway \n **Cena:** $15.900 \n **Marża:** $1.900 \n **Prędkość:**  140 km/h \n **Napęd na:** tył \n **Spalanie:** 9l')
        kanal.send(embed);
    } else if (msg.includes('glendale') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Glendale')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Glendale Capacious Taxi \n **Cena:** $10.000 \n **Marża:** $1.500 \n **Prędkość:**  -  \n **Napęd na:** tył \n **Spalanie:** - \n\n**Nazwa:** Glendale Sumptous Taxi\n **Cena:** $10.000 \n **Marża:** $1.500 \n **Prędkość:**  - \n **Napęd na:** tył \n **Spalanie:** - \n\n**Nazwa:** Glendale Taxi \n **Cena:** $9.000 \n **Marża:** $1.000 \n **Prędkość:**  - \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('greenwood') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Greenwood')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Greenwood \n **Cena:** $7.500 \n **Marża:** $1.050 \n **Prędkość:**  140 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('hpv') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów HPV')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** HPV City \n **Cena:** $13.500 \n **Marża:** $3.500 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 9l \n\n**Nazwa:** HPV Sport \n **Cena:** $16.000 \n **Marża:** $4.000 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 9l\n\n**Nazwa:** HPV Touring \n **Cena:** $15.000 \n **Marża:** $3.000 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 9l\n\n**Nazwa:** HPV Touring Plus \n **Cena:** $15.500 \n **Marża:** $3.500 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 9l')
        kanal.send(embed);
    } else if (msg.includes('holownik') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Holownik')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Holownik \n **Cena:** $17.500 \n **Marża:** $2.500 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** 17,5l')
        kanal.send(embed);
    } else if (msg.includes('huntley') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Huntley')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Huntley \n **Cena:** $73.500 \n **Marża:** $9.500 \n **Prędkość:**  160 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l')
        kanal.send(embed);
    } else if (msg.includes('infernus') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Infernus')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Infernus \n **Cena:** $275.000 \n **Marża:** $25.000 \n **Prędkość:** 230 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l \n\n**Nazwa:** Infernus Targa \n **Cena:** $305.000 \n **Marża:** $30.000 \n **Prędkość:** 230 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('intruder') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Intruder')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Intruder \n **Cena:** $6.500 \n **Marża:** $950 \n **Prędkość:**  150 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('jester') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Jester')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Jester \n **Cena:** $80.900 \n **Marża:** $7.900 \n **Prędkość:**  180 km/h \n **Napęd na:** przód \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('jetmax') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Jetmax')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Jetmax \n **Cena:** $96.500 \n **Marża:** $6.500 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('journey') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Journey')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Journey \n **Cena:** $12.000 \n **Marża:** $2.000 \n **Prędkość:**  110 km/h \n **Napęd na:** tył \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('karawan') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Karawan')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Karawan \n **Cena:** $13.900 \n **Marża:** $1.910 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('kawai') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Kawaii')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Kawaii \n **Cena:** $70.000 \n **Marża:** $15.000 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** 16l')
        kanal.send(embed);
    } else if (msg.includes('landstalker') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Landstalker')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Landstalker \n **Cena:** $28.000 \n **Marża:** $3.500 \n **Prędkość:**  160 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l')
        kanal.send(embed);
    } else if (msg.includes('limuzyna') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Limuzyna')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Limuzyna \n **Cena:** $130.000 \n **Marża:** $10.000 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('majestic') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Majestic')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Majestic \n **Cena:** $5.990 \n **Marża:** $690 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('manana') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Manana')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Manana \n **Cena:** $3.950 \n **Marża:** $450 \n **Prędkość:**  130 km/h \n **Napęd na:** przód \n **Spalanie:** 7l \n\n**Nazwa:** Manana Cabrio \n **Cena:** $4.950 \n **Marża:** $450 \n **Prędkość:**  130 km/h \n **Napęd na:** przód \n **Spalanie:** 7l \n\n**Nazwa:** Manana GT \n **Cena:** $6.000 \n **Marża:** $500 \n **Prędkość:**  140 km/h \n **Napęd na:** tył \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('marbel') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Marbelle')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Marbelle \n **Cena:** $15.000 \n **Marża:** $5.000 \n **Prędkość:**  170 km/h \n **Napęd na:** tył \n **Spalanie:** 17.5l')
        kanal.send(embed);
    } else if (msg.includes('marquis') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Marquis')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Marquis \n **Cena:** $96.800 \n **Marża:** $6.800 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('maverick') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Maverick')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Maverick \n **Cena:** $300.000 \n **Marża:** $25.000 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('merit') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Merit')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Merit \n **Cena:** $33.000 \n **Marża:** $3.000 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('mesa') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Mesa')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Mesa \n **Cena:** $19.900 \n **Marża:** $1.900 \n **Prędkość:**  140 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 7l \n\n**Nazwa:** Mesa Scout \n **Cena:** $28.000 \n **Marża:** $8.000 \n **Prędkość:**  140 \n **Napęd na:** wszystkie \n **Spalanie:** 7l \n\n**Nazwa:** Mesa Soft \n **Cena:** $22.000 \n **Marża:** $3.000 \n **Prędkość:**  140 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('moon') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Moonbeam')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Moonbeam \n **Cena:** $7.000 \n **Marża:** $1.600 \n **Prędkość:**  110 km/h  \n **Napęd na:** tył \n **Spalanie:** 17,5l \n\n**Nazwa:** Moonbeam Classic\n **Cena:** $9.500 \n **Marża:** $3.500 \n **Prędkość:**  110 km/h \n **Napęd na:** tył \n **Spalanie:** 17,5l \n\n**Nazwa:** Moonbeam Taxi \n **Cena:** $7.400 \n **Marża:** $2.000 \n **Prędkość:**  110 km/h \n **Napęd na:** tył \n **Spalanie:** 17,5l')
        kanal.send(embed);
    } else if (msg.includes('mtb') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu MTB')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** MTB \n **Cena:** $490 \n **Marża:** $90 \n **Prędkość:**  - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('patriot') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Patriot')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Patriot \n **Cena:** $82.500 \n **Marża:** $7.500 \n **Prędkość:**  160 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l')
        kanal.send(embed);
    } else if (msg.includes('pcj') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu PCJ-600')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** PCJ-600 \n **Cena:** $21.990 \n **Marża:** $2.090 \n **Prędkość:**  160 km/h \n **Napęd na:** tył \n **Spalanie:** 9l')
        kanal.send(embed);
    } else if (msg.includes('peren') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Perennial')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Perennial \n **Cena:** $9.500 \n **Marża:** $1.000 \n **Prędkość:**  140 km/h \n **Napęd na:** przód \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('picador') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Picador')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Picador \n **Cena:** $8.500 \n **Marża:** $1.000 \n **Prędkość:**  150 km/h \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('pomoc') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Pomoc drogowa')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Pomoc drogowa \n **Cena:** $11.900 \n **Marża:** $2.110 \n **Prędkość:**  120 km/h \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('ponton') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Ponton')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Ponton \n **Cena:** $14.500 \n **Marża:** $2.000 \n **Prędkość:**  110 km/h \n **Napęd na:** - \n **Spalanie:** 25l')
        kanal.send(embed);
    } else if (msg.includes('pony') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Pony')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Pony \n **Cena:** $11.900 \n **Marża:** $1.900 \n **Prędkość:**  115 km/h \n **Napęd na:** tył \n **Spalanie:** 16l')
        kanal.send(embed);
    } else if (msg.includes('premier') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Premier')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Premier \n **Cena:** $31.500 \n **Marża:** $4.500 \n **Prędkość:** 180 km/h \n **Napęd na:** tył \n **Spalanie:** 12l \n\n**Nazwa:** Premier Executive \n **Cena:** $36.500 \n **Marża:** $6.500 \n **Prędkość:** 180 km/h \n **Napęd na:** tył \n **Spalanie:** 12l\n\n**Nazwa:** Premier Taxi \n **Cena:** $12.500 \n **Marża:** $3.000 \n **Prędkość:** 180 km/h \n **Napęd na:** tył \n **Spalanie:** 12l\n\n**Nazwa:** Premier Taxi Executive \n **Cena:** $14.000 \n **Marża:** $3.000 \n **Prędkość:** 180 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('previon') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Previon')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Previon \n **Cena:** $3.700 \n **Marża:** $1.000 \n **Prędkość:** 150 km/h \n **Napęd na:** przód \n **Spalanie:** 7l \n\n**Nazwa:** Previon GT \n **Cena:** $7.000 \n **Marża:** $2.000 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 7l')
        kanal.send(embed);
    } else if (msg.includes('primo') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Primo')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Primo \n **Cena:** $6.500 \n **Marża:** $1.100 \n **Prędkość:**  140 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('quad') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Quad')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Quad \n **Cena:** $14.000 \n **Marża:** $2.000 \n **Prędkość:**  115 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 9l')
        kanal.send(embed);
    } else if (msg.includes('rancher') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdów Rancher')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Rancher \n **Cena:** $28.500 \n **Marża:** $3.500 \n **Prędkość:** 140 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l \n\n**Nazwa:** Rancher XL \n **Cena:** $41.000 \n **Marża:** $3.000 \n **Prędkość:** 160 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l\n\n**Nazwa:** Ranchel XL Coat \n **Cena:** $44.000 \n **Marża:** $4.000 \n **Prędkość:** 160 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l\n\n**Nazwa:** Rancher XL Pickup \n **Cena:** $44.000 \n **Marża:** $5.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** - \n\n**Nazwa:** Ranchel XL Safari \n **Cena:** $67.000 \n **Marża:** $7.000 \n **Prędkość:** 170 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l\n\n**Nazwa:** Rancher XL Soft \n **Cena:** $44.000 \n **Marża:** $4.000 \n **Prędkość:** 160 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l')
        kanal.send(embed);
    } else if (msg.includes('reefer') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Reefer')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Reefer \n **Cena:** $25.000 \n **Marża:** $5.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('rumpo') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Rumpo')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Rumpo \n **Cena:** $9.000 \n **Marża:** $1.000 \n **Prędkość:** 140 km/h \n **Napęd na:** przód \n **Spalanie:** 16l \n\n **Nazwa:** Rumpo Classic \n **Cena:** $10.500 \n **Marża:** $1.500 \n **Prędkość:** 160 km/h \n **Napęd na:** przód \n **Spalanie:** 16l')
        kanal.send(embed);
    } else if (msg.includes('sanchez') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Sanchez')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Sanchez \n **Cena:** $20.900 \n **Marża:** $2.900 \n **Prędkość:** 140 km/h \n **Napęd na:** tył \n **Spalanie:** 8l')
        kanal.send(embed);
    } else if (msg.includes('sentinel') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Sentinel')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Sentinel \n **Cena:** $39.000 \n **Marża:** $4.000 \n **Prędkość:** 170 km/h \n **Napęd na:** tył \n **Spalanie:** 12l \n\n **Nazwa:** Sentinel STD \n **Cena:** $45.000 \n **Marża:** $5.000 \n **Prędkość:** 180 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('shamal') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Shamal')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Shamal \n **Cena:** $435.000 \n **Marża:** $55.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('skim') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Skimmer')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Skimmer \n **Cena:** $150.000 \n **Marża:** $20.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if ((msg.includes('składak') || msg.includes('skladak')) && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Składak')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Składak \n **Cena:** $390 \n **Marża:** $90 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('slamvan') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Slamvan')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Slamvan \n **Cena:** $43.000 \n **Marża:** $3.000 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 22l \n\n **Nazwa:** Slamvan Classic \n **Cena:** $45.000 \n **Marża:** $5.000 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('solair') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Solair')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Solair \n **Cena:** $6.800 \n **Marża:** $800 \n **Prędkość:** 150 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('spa') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Sparrow')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Sparrow \n **Cena:** $275.000 \n **Marża:** $20.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('spe') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Speeder')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Speeder \n **Cena:** $55.000 \n **Marża:** $5.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('squalo') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Squalo')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Squalo \n **Cena:** 100.000 \n **Marża:** $28.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('stinger') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Stinger')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Stinger \n **Cena:** $215.000 \n **Marża:** $25.000 \n **Prędkość:** 240 km/h \n **Napęd na:** tył \n **Spalanie:** 13l \n\n **Nazwa:** Stinger Cabrio \n **Cena:** $225.000 \n **Marża:** $25.000 \n **Prędkość:** 240 km/h \n **Napęd na:** tył \n **Spalanie:** 12l \n\n **Nazwa:** Stinger Coupe \n **Cena:** $280.000 \n **Marża:** $50.000 \n **Prędkość:** 240 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 13l')
        kanal.send(embed);
    } else if (msg.includes('stratum') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Stratum')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Stratum \n **Cena:** $16.900 \n **Marża:** $1.900 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** - \n\n **Nazwa:** Stratum RS \n **Cena:** $23.000 \n **Marża:** $5.000 \n **Prędkość:** 180 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l \n\n **Nazwa:** Stratum Shimizu \n **Cena:** $26.000 \n **Marża:** $3.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** - \n\n **Nazwa:** Stratum Streamline \n **Cena:** $25.000 \n **Marża:** $5.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('stunt') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Stuntplane')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Stuntplane \n **Cena:** 250.000 \n **Marża:** $30.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('sultan') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Sultan')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Sultan \n **Cena:** $92.500 \n **Marża:** $10.500 \n **Prędkość:** 175 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l \n\n **Nazwa:** Sultan Rallye \n **Cena:** $120.000 \n **Marża:** $30.000 \n **Prędkość:** - \n **Napęd na:** wszystkie \n **Spalanie:** - \n\n **Nazwa:** Sultan RS \n **Cena:** $120.000 \n **Marża:** $30.000 \n **Prędkość:** 185 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('sunrise') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Sunrise')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Sunrise \n **Cena:** 14.500 \n **Marża:** $2.100 \n **Prędkość:** 150 km/h \n **Napęd na:** przód \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('super') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Super GT')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Super GT \n **Cena:** 165.000 \n **Marża:** $15.000 \n **Prędkość:** 190 km/h \n **Napęd na:** tył \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('tahoma') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Tahoma')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Tahoma \n **Cena:** $10.900 \n **Marża:** $1.800 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 12l \n\n **Nazwa:** Tahoma Classic \n **Cena:** $12.500 \n **Marża:** $3.000 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('tropic') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Tropic')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Tropic \n **Cena:** 75.000 \n **Marża:** $20.000 \n **Prędkość:** - \n **Napęd na:** - \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('turismo') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Turismo')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Turismo \n **Cena:** $275.000 \n **Marża:** $25.000 \n **Prędkość:** 200 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l \n\n **Nazwa:** Turismo V50 \n **Cena:** $325.000 \n **Marża:** $45.000 \n **Prędkość:** 215 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('uranus') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Uranus')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Uranus \n **Cena:** 35.000 \n **Marża:** $4.500 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 24l')
        kanal.send(embed);
    } else if (msg.includes('vincent') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Vincent')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Vincent \n **Cena:** 9.900 \n **Marża:** $2.400 \n **Prędkość:** 160 km/h \n **Napęd na:** przód \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('virgo') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Virgo')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Virgo \n **Cena:** 8.000 \n **Marża:** $1.250 \n **Prędkość:** 150 km/h \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('wared') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Wared')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Wared \n **Cena:** 9.900 \n **Marża:** $900 \n **Prędkość:** 150 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('wash') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Washington')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Washington \n **Cena:** 65.000 \n **Marża:** $7.000 \n **Prędkość:** 160 km/h \n **Napęd na:** tył \n **Spalanie:** 12l')
        kanal.send(embed);
    } else if (msg.includes('wil') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Willard')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Willard \n **Cena:** 6.500 \n **Marża:** $1.000 \n **Prędkość:** 155 km/h \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('yan') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Yankee')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Yankee \n **Cena:** 14.000 \n **Marża:** $2.000 \n **Prędkość:** 110 km/h \n **Napęd na:** tył \n **Spalanie:** -')
        kanal.send(embed);
    } else if (msg.includes('yose') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu Yosemite')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** Yosemite \n **Cena:** $25.000 \n **Marża:** $4.000 \n **Prędkość:** 150 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l \n\n **Nazwa:** Yosemite Safari \n **Cena:** $28.000 \n **Marża:** $35.000 \n **Prędkość:** 160 km/h \n **Napęd na:** wszystkie \n **Spalanie:** 16l')
        kanal.send(embed);
    } else if (msg.includes('zr') && message.channel.name === '🔎szukanie-pojazdów') {
        const embed = new MessageEmbed()
            .setTitle('Dane dla pojazdu ZR-350')
            .setColor(0xb81196)
            .setDescription('**Nazwa:** ZR-350 \n **Cena:** 99.000 \n **Marża:** $9.000 \n **Prędkość:** 190 km/h \n **Napęd na:** tył \n **Spalanie:** 22l')
        kanal.send(embed);
    } else if (msg.includes('ziobro')) {
        const embed = new MessageEmbed()
            .setTitle('Piosenka o ziobrze')
            .setColor(0xb81196)
            .setDescription('Ziobro kurwo jebana przestań mi kurwa rodzinę prześladować! Pedale pisowski w dupe jebany ty! Kurwo pedofilu od Kaczyńskiego nie boję i kurwo znowu mi dzisiaj dotknąłeś rodziny zapierdalam kurwo do tej twojej w dupe jebanej mamusi tej kurwy suki co cię kurwo wysrała na ten świat. Nie będziesz ty kurwo robił ludziom tego co robisz. Ty w dupę kurwo jebana ty, cię kurwo złapię, ale na początek jadę starą kurwa Ziobrową tak kurwa napadnę ty w dupę jebany pedale jak ty mnie. Ty kurwo jebana pierdolona, wy pisowskie śmiecie, w kurwę jebane wy! Ja wam kurwy dam! Wolne kurwy macie na całego ze mną!')
        kanal.send(embed);
    }

    if (msg === '/vdmhelp') {
        const embed = new MessageEmbed()
            .setTitle("Poradnik jak używać Vice Deluxe Motorsport Helpera!")
            .setAuthor("VDM Helper", "https://images-ext-2.discordapp.net/external/xOo_RQmEXgiUSoHe5gRHwYwz9K1l1dp6fXW-iLveruo/https/i.imgur.com/KTBAVF5.png", "https://yagami.xyz")
            .setColor(0xb81196)
            .setDescription("\nAby wyszukać dowolne auto po prostu wpisz jego nazwę.\n \n**UWAGA**\n Jeśli auto posiada kilka wariantów wpisz jego nazwę podstawową modelu:\n ``Alpha``\n Wtedy wypiszę wszystkie potrzebne informacje o danym modelu auta!")
            .setTimestamp(Date.now())
        kanal.send(embed);
    }

})

client.login(config.token)