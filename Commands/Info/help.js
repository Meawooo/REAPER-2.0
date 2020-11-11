const Discord = module.require("discord.js");
const mongoose = require("mongoose")
const prefixModel = require("../Owner/models/prefix");

mongoose.connect("mongodb+srv://Simpleboy353:rhtking123@cluster0.hcxzx.mongodb.net/Clustor0?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  name: "help",
  description: "Get the Command List",
  aliases: ["commands", "cmd", "h"],
  run: async(client, message, args) => {
    const avatar = client.user.avatarURL;
    const data = await prefixModel.findOne({
      GuildID: message.guild.id
    });

    if (data) {
     var prefix = data.Prefix;
    } else if (!data) {
      //set the default prefix here
     var prefix = "=";
    }

    if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setThumbnail(avatar)
      .setTitle("Available Command Categories")
      .setDescription(`
<:conf:748544324978999448> __**CONFIGURATION**__\n\`${prefix}help config\`\nConfigure the bot as per your server!

<:nerdfun:770838517576237068> __**FUN**__\n\`${prefix}help fun\`\nHave some fun in your Server!

<:cam:748544442478100511> __**IMAGE**__\n\`${prefix}help image\`\nManipulate Images with these commands

<:inf:748544269798866964> __**INFORMATION**__\n\`${prefix}help info\`\nGet some info relating the Server, users or our Bot

<:mod:748544387499294841> __**MODERATION**__\n\`${prefix}help mod\`\nIssues relating some users? Use these Commands

<:music:761893108442071060> __**MUSIC**__\n\`${prefix}help music\`\nRelax and listen to some music!

<:nsfw:768346751576440852> __**NSFW**__\n\`${prefix}help nsfw\`\nSome NSFW Content for you! 18+ ONLY!

<:utility:748177830134808597> __**UTILITIES**__\n\`${prefix}help utility\`\nSome Simple Utility Commands`)
      .setFooter(`Be sure to read our Privacy Policy before using the bot! Use =policy for more info!`)
      .setThumbnail(client.user.avatarURL())
      .setColor("GREEN");

     return message.channel.send(embed);

  } else if (args[0] === "mod") {
      const embed1 = new Discord.MessageEmbed()
        .setTitle("Moderation Commands")
        .setDescription("`kick`, `ban`, `softban`, `mute`, `unmute`, `tempmute`, `warn`, `checkwarns`, `massaddrole`, `massremoverole`, `slowmode`, `voicekick`, `voicemute`, `voiceunmute`, `voicemuteall`, `voiceunmuteall`, `deafen`, `undeafen`, `deafenall`, `undeafenall`")
        .setFooter(`Use ${prefix} before each command!`)
        .setColor("RANDOM");
     return message.channel.send(embed1)

  } else if (args[0] === "music") {
      const embed2 = new Discord.MessageEmbed()
        .setTitle("Music Commands")
        .setDescription("`play [p]`, `pause`, `resume [r]`, `skip [s]`, `shuffle`, `skipto [st]`, `search`, `stop`, `queue [q]`, `np`, `playlist [pl]`, `volume`, `pruning`, `remove`, `lyrics [ly]`, `repeat [rep]`")
        .setFooter(`Use ${prefix} before each command!`)
        .setColor("RANDOM");

      return message.channel.send(embed2)

  } else if (args[0] === "info") {
      const embed3 = new Discord.MessageEmbed()
        .setTitle("Info Commands")
        .setDescription("`botinfo`, `devteam`, `emojiid`, `help`, `invite`, `ping`, `policy`, `report`, `userinfo`, `userid`, `serverinfo`, `suggest`")
        .setFooter(`Use ${prefix} before each command!`)
        .setColor("RANDOM");

      return message.channel.send(embed3);

  } else if (args[0] === "utility") {
      const embed4 = new Discord.MessageEmbed()
        .setTitle("Utility Commands")
        .setDescription("`addemoji`, `avatar`, `announce`, `clear`, `createrole`, `delchannel`, `delrole`, `emoji`, `emojiid`, `enlargemoji`, `esay`, `giverole`, `google`, `imdb`, `lock`, `newtext`, `newvoice`, `nickname`, `playstore`, `poll`, `react`, `removerole`, `say`, `servericon`, `suggestion`, `timedlockdown`, `unlock`, `weather`, `wiki`, `youtube`")
        .setFooter(`Use ${prefix} before each command!`)
        .setColor("RANDOM");

      return message.channel.send(embed4);

  } else if (args[0] === "config") {
      const embed5 = new Discord.MessageEmbed()
        .setTitle("Config Commands")
        .setDescription(`To see current settings do \`${prefix}config stats\``)
        .addField(`**》AUTOROLE & PREFIX**`, `\`\`\`•autorole <@role|off>\n•prefix <NewPrefix>\`\`\``)
        .addField(`**》JOIN & LEAVE**`, `\`\`\`•joinchannel <#channel|off>\n•joinmessage <text|off>\n•leavechannel <#channel|off>\n•leavemessage <text|off>\`\`\``)
        .addField(`**》VARIABLES**`, `\`\`\`▪{user.mention} - Mentions the user who Joined/Left\n▪{user.name} - Displays the name of the user who Joined/Left\n▪{server} - Displays the name of the Server\n▪{membercount} - Display the Member Count of the Server\`\`\``)
        .addField(`**》LOGGING ACTIVITIES**`, `\`\`\`•messagelogs <#channel|off>\n•modlogs <#channel|off>\`\`\`\n\`\`\`Note: The bot will send an automated response if the Join and Leave Channels are setup without join or leave messages\`\`\``)
        .setFooter(`Use ${prefix} before each command!`)
        .setColor("RANDOM");

      return message.channel.send(embed5);

  } else if (args[0] === "fun") {
      const embed6 = new Discord.MessageEmbed()
        .setTitle("Fun Commands")
        .setDescription("`8ball`, `ascii`, `clap`, `clyde`, `cowsay`, `dab`, `emojify`, `fliptext`, `greentext`, `hack`, `howgay`, `hug`, `joke`, `kill`, `orangetext`, `pokeimg`, `pp`, `respect`, `reverse`, `roast`, `slap`, `trivia`, `urban`, `vaportext`, `yomama`")
        .setFooter(`Use ${prefix} before each command!`)
        .setColor("RANDOM");

      return message.channel.send(embed6);
  
    } else if (args[0] === "image") {
      const embed7 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Image Commands")
        .setDescription("`achievement`, `amazeme`, `amiajoke`, `bad`, `catsay`, `challenge`, `changemymind`, `creatememe`, `didyoumean`, `drake`, `facts`, `illegal`, `jokeoverhead`, `meme`, `phb`, `rip`, `scroll`, `tableflip`, `textimage`, `trash`, `trigger`, `trumptweet`, `wasted`, `wideavatar`")
        .setFooter(`Use ${prefix} before each command!`);

      return message.channel.send(embed7);

    } else if (args[0] === "nsfw") {
      const embed8 = new Discord.MessageEmbed()
      .setTitle("NSFW Commands")
      .setDescription("`4k`, `anal`, `ass`, `blowjob`, `boobs`, `cumsluts`, `danbooru`, `hentai`, `milf`, `pussy`")
      .setFooter(`Use ${prefix} before each command!`)
      .setColor("RANDOM")

      return message.channel.send(embed8);
    }
  }
}
