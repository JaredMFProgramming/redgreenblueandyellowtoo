var imBlue;
if (document.bgColor == 'lime'){
	imBlue = 'green';
} else {
	imBlue = document.bgColor;
}
	
var genuineTitles = ['Red, Green, Blue, and Yellow, Too!', "You're a special one. :D", 'Not Your Average "Sometimes Red, Sometimes Blue"', 'You Only Live Forever',
'I Support Diversity', 'The New Purple.com?', "For he's a jolly good fellow!", 'UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A START', 'Bread Crumbs and Beaver Spit',
'#RGBY', 'Then a skeleton popped out!', "What's that?  A tasty snack?", 'Milhouse is not a meme!', 'I want to love and support you! <3', 'The grandest of dads?',
'Never gonna give you up!', 'Random Title', 'Also try Minecraft!', 'Also try Terraria!', 'Jump up, jump up, and get down!', 'A feeling that I know so well.',
"Oh, it's got me in its spell.", "I'm " + imBlue + ', da ba dee, da ba dum!', 'YO SKRILL DROP IT HARD', '2 + 2 = 4', "That's the joke!", "Drink yo' prune juice!"];
var doop = Math.floor((Math.random() * (genuineTitles.length)));
document.title = genuineTitles[doop];