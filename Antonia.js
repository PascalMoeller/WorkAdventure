// Register callbacks
// ------------------
WA.chat.onChatMessage(OnMessageReceive)
 
WA.chat.SendChatMessage('Hallo ' + WA.player.name)
WA.chat.SendChatMessage('Magst du etwas zu essen bestellen [J],[N]')

// ========= //
// Callbacks //
// ========= //

function OnMessageReceive(answer)
{
	if (answer == "J") 
}