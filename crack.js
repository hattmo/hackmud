function(context, args) {
    var security = #fs.scripts.get_level({ name: args.t.name })
    if (security === 4) {
        var solution = {}
        var wl = {n:"0"}
        do{
            var response = args.t.call(solution)
            if(respons.indexof("nuutec l0cket")!==-1){
                if(wl.n!=="l0cket"){
                    wl = #db.f({n:"l0cket"}).first()
                }
                
            }

        }while(args.t.call(solution).indexof("LOCK_ERROR")===-1)
    }
    return ("done")
}