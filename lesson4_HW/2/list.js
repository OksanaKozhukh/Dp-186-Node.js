const listOfFriends = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(listOfFriends) {
    
    let list = listOfFriends.split(";")
                            .map(item => item.toUpperCase().split(':').reverse())
                            .sort()
                            .join(')(');
    
    return '(' + list + ')';
}

console.log(meeting(listOfFriends));

