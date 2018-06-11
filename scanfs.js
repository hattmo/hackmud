function(context, args)
{
	var o = {}
	#ms.chats.join({
		name: args["c"]
	});
	o = #fs.scripts.fullsec({
		sector: args["c"]
	});
	#ms.chats.leave({
		channel: args["c"]
	});
	return o;
}
