function(context, args) {
	var r = #fs.scripts.fullsec()
	var o = [] 
	var g = []
	var on = #db.f({ n: "f" }).first().i
	var n = #fs.users.last_action({ name: "gibson"})//.t.getTime()
// 	if (on + 5 > r.length) on = 0
// 	for (var i = on; i < on + 5; i++) {
// 		#ms.chats.join({name: r[i]})
// 		var s = #fs.scripts.fullsec({sector: r[i]})
// 		#ms.chats.leave({channel: r[i]})
// 		for (var j = 0; j < s.length; j++) {
// //			if(#fs.users.last_action({ name: s[j].split(".")[0] }).t.getTime() === n) g.push(s[j])
// 		}
// 		o.push(...g)
// 	}
// 	#db.u({ n: "f" },{$set:{"i":(on + 5)}})
// 	#db.u({ n: "f" },{$addToSet:{"v":{$each:o}}})
	return n
}