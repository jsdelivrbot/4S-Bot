
var macroStart;
    macroStart ="CODE:";
    macroStart +="SET !ERRORIGNORE YES" + "\n"; 

    macroStart +="TAB T=1" + "\n";
    macroStart +="WAIT SECONDS=0" + "\n";
    macroStart += "TAG POS=1 TYPE=A ATTR=TXT:Youtube<SP>Subscribe " + "\n"; 
	macroStart +="WAIT SECONDS=1" + "\n";
    macroStart += "TAG POS=1 TYPE=DIV ATTR=TXT:Subscribe" + "\n";  
    macroStart += "TAB T=2" + "\n";
    macroStart += " FRAME F=0" + "\n";
     macroStart +="WAIT SECONDS=1" + "\n";
 macroStart +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:SubscribeSubscribedUnsubscribe" + "\n"; 
    macroStart += "TAB T=2" + "\n";
	macroStart +="WAIT SECONDS=5" + "\n";
    macroStart += "TAB T=1" + "\n";
	macroStart += "TAB CLOSEALLOTHERS" + "\n";
    macroStart +="WAIT SECONDS=3" + "\n";
	
    macroStart += "TAG POS=1 TYPE=DIV ATTR=TXT:Subscribe" + "\n";  
    macroStart += "TAB T=2" + "\n";
    macroStart += " FRAME F=0" + "\n";
    macroStart +="WAIT SECONDS=1" + "\n";
 macroStart +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:SubscribeSubscribedUnsubscribe" + "\n"; 
    macroStart += "TAB T=2" + "\n";
	macroStart +="WAIT SECONDS=5" + "\n";
    macroStart += "TAB T=1" + "\n";
	macroStart += "TAB CLOSEALLOTHERS" + "\n";
    macroStart +="WAIT SECONDS=3" + "\n";
	
    macroStart += "TAG POS=1 TYPE=DIV ATTR=TXT:Subscribe" + "\n";  
    macroStart += "TAB T=2" + "\n";
    macroStart += " FRAME F=0" + "\n";
    macroStart +="WAIT SECONDS=1" + "\n";
 macroStart +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:SubscribeSubscribedUnsubscribe" + "\n"; 
    macroStart += "TAB T=2" + "\n";
	macroStart +="WAIT SECONDS=5" + "\n";
    macroStart += "TAB T=1" + "\n";
	macroStart += "TAB CLOSEALLOTHERS" + "\n";
    macroStart +="WAIT SECONDS=3" + "\n";
    	
    macroStart += "TAG POS=1 TYPE=DIV ATTR=TXT:Subscribe" + "\n";  
    macroStart += "TAB T=2" + "\n";
    macroStart += " FRAME F=0" + "\n";
    macroStart +="WAIT SECONDS=1" + "\n";
 macroStart +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:SubscribeSubscribedUnsubscribe" + "\n"; 
    macroStart += "TAB T=2" + "\n";
	macroStart +="WAIT SECONDS=5" + "\n";
    macroStart += "TAB T=1" + "\n";
	macroStart += "TAB CLOSEALLOTHERS" + "\n";
    macroStart +="WAIT SECONDS=3" + "\n";
    	
    macroStart += "TAG POS=1 TYPE=DIV ATTR=TXT:Subscribe" + "\n";  
    macroStart += "TAB T=2" + "\n";
    macroStart += " FRAME F=0" + "\n";
    macroStart +="WAIT SECONDS=1" + "\n";
 macroStart +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:SubscribeSubscribedUnsubscribe" + "\n"; 
    macroStart += "TAB T=2" + "\n";
	macroStart +="WAIT SECONDS=5" + "\n";
    macroStart += "TAB T=1" + "\n";
	macroStart += "TAB CLOSEALLOTHERS" + "\n";
    macroStart +="WAIT SECONDS=3" + "\n";
    	
    macroStart += "TAG POS=1 TYPE=DIV ATTR=TXT:Subscribe" + "\n";  
    macroStart += "TAB T=2" + "\n";
    macroStart += " FRAME F=0" + "\n";
    macroStart +="WAIT SECONDS=1" + "\n";
 macroStart +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:SubscribeSubscribedUnsubscribe" + "\n"; 
    macroStart += "TAB T=2" + "\n";
	macroStart +="WAIT SECONDS=5" + "\n";
    macroStart += "TAB T=1" + "\n";
	macroStart += "TAB CLOSEALLOTHERS" + "\n";
    macroStart +="WAIT SECONDS=3" + "\n";
    	
    macroStart += "TAG POS=1 TYPE=DIV ATTR=TXT:Subscribe" + "\n";  
    macroStart += "TAB T=2" + "\n";
    macroStart += " FRAME F=0" + "\n";
    macroStart +="WAIT SECONDS=1" + "\n";
 macroStart +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:SubscribeSubscribedUnsubscribe" + "\n"; 
    macroStart += "TAB T=2" + "\n";
	macroStart +="WAIT SECONDS=5" + "\n";
    macroStart += "TAB T=1" + "\n";
	macroStart += "TAB CLOSEALLOTHERS" + "\n";
    macroStart +="WAIT SECONDS=3" + "\n";
    	
    macroStart += "TAG POS=1 TYPE=DIV ATTR=TXT:Subscribe" + "\n";  
    macroStart += "TAB T=2" + "\n";
    macroStart += " FRAME F=0" + "\n";
    macroStart +="WAIT SECONDS=1" + "\n";
 macroStart +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:SubscribeSubscribedUnsubscribe" + "\n"; 
    macroStart += "TAB T=2" + "\n";
	macroStart +="WAIT SECONDS=5" + "\n";
    macroStart += "TAB T=1" + "\n";
	macroStart += "TAB CLOSEALLOTHERS" + "\n";
    macroStart +="WAIT SECONDS=3" + "\n";	
	    
    



var i=0;
var n=prompt("Input the number of Instrgam loops.",100)

for (i=1; i <= n; i++)
{
iimPlay("CODE:"+"URL GOTO=http://addmefast.com/free_points.html")


iimPlay(macroStart,25)

iimDisplay("Current loop is: "+i)

iimDisplay("New Page")

}
