

const scriptsInEvents = {

	async Fas1_Event10(runtime, localVars)
	{
		setTimeout(() => {
		    const msg = runtime.objects.msgText.getFirstInstance();
		    msg.text = "Boa sorte na fase 1!";
		    msg.isVisible = true;
		}, 1000); 
		
	},

	async Fase2_Event14(runtime, localVars)
	{
		setTimeout(() => {
		    const msg = runtime.objects.msgText.getFirstInstance();
		    msg.text = "Boa sorte na fase 2!";
		    msg.isVisible = true;
		}, 1000); 
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
