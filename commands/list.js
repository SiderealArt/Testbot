module.exports = {
	name: 'list',
	description: 'print out current queue.',
	execute(message, args) {
		message.delete({
			timeout: 1,
			reason: ''
		})
		const queue = message.client.queue;
        const guild = message.guild;
        const serverQueue = queue.get(message.guild.id);
		var a = "";
		console.log(serverQueue.songs);
		serverQueue.songs.forEach(function (value, i) {
		  a += i + 1 + '. **' + value.title + '**\n';
		});
		return message.channel.send(a);
	},
};