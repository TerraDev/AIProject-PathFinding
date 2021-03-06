var report;
var arr; //array
var begin = null;
var end = null;

window.onload = function() 
{
    //alert("works?");
    arr = Array.from(Array(20), () => new Array(20));
    //turn = Turntype.Locked;

    var frame_div =document.getElementsByClassName('layout2')[0];
    frame_div.style.backgroundColor= " rgba(0, 231, 212, 0.25)";
    for (i = 399; i >= 0; i--) 
    {
        var div = document.createElement("div");
        div.className = "object";
        let num = 19 + 40*(Math.floor(i/20)) -i;
        div.setAttribute("place", num);//comment
        //div.innerHTML = div.getAttribute("place");//comment
        frame_div.appendChild(div);

        arr[Math.floor(num/20)][num%20] = div;
    }
report = document.getElementsByClassName("PlaceHolder")[1];

}

Clk = function(button_id)
{
    document.getElementById("set_sp").className = "MyBtn"
    document.getElementById("set_ep").className = "MyBtn"
    document.getElementById("set_b").className = "MyBtn"
    document.getElementById("set_b").className = "MyBtn"

    document.getElementById(button_id).className = "SelectedBtn";
}

clearEvents = function()
{
    for(let i=0;i<20;i++)
    {
        for(let j=0;j<20;j++)
        {
            arr[i][j].onclick=function(){}
        }
    }
}

document.getElementById("set_sp").onclick = function()
{
    if(exploredSet.length!=0)
    {
        alert("Please clear path before proceeding");
        return;
    }

    Clk("set_sp");
    for(let i=0;i<20;i++)
    {
        for(let j=0;j<20;j++)
        {
            arr[i][j].onclick=function()
            {
               if(this.className=="begin")
               {
                    this.className="object";
                    begin=null;
               }
               else if(this.className=="end")
               {
                   this.className="begin";
                   begin.className = "object"
                   begin=this;
                   end=null;
               }
               else
               {
                    if(begin!=null)
                        begin.className="object";
                    begin = this;
                    begin.className="begin";
               }
            }
        }
    }
};

document.getElementById("set_ep").onclick = function()
{
    if(exploredSet.length!=0)
    {
        alert("Please clear path before proceeding");
        return;
    }

    Clk("set_ep");
    for(let i=0;i<20;i++)
    {
        for(let j=0;j<20;j++)
        {
            arr[i][j].onclick=function()
            {
               if(this.className=="end")
               {
                    this.className="object";
                    end=null;
               }
               else if(this.className=="begin")
               {
                   end.className="object"
                   this.className="end";
                   end=this;
                   begin=null;
               }
               else
               {
                   if(end!=null)
                        end.className="object";
                   end = this;
                   end.className="end";
               }
            }
        }
    }
};


document.getElementById("set_b").onclick = function()
{

    if(exploredSet.length!=0)
    {
        alert("Please clear path before proceeding");
        return;
    }

    Clk("set_b");
    for(let i=0;i<20;i++)
    {
        for(let j=0;j<20;j++)
        {
            arr[i][j].onclick=function()
            {
               if(this.className=="block")
               {
                    this.className="object";
               }
               else
               {
                   if(this == begin)
                       begin=null;
                    else if(this == end)
                        end=null;
                   this.className="block";
               }
            }
        }
    }

};

document.getElementById("reset").onclick = function() 
{
    Clk("reset");
    this.className = "MyBtn";

    for(let i=0;i<20;i++)
    {
        for(let j=0;j<20;j++)
        {
            arr[i][j].className = "object"
        }
    }

    frontierQueue = [];
    exploredSet = [];
    begin = null;
    end = null;
    clearEvents();
}

document.getElementById("reset2").onclick = function() 
{
    Clk("reset2");
    this.className = "MyBtn";

    for(let i=0;i<20;i++)
    {
        for(let j=0;j<20;j++)
        {
            if(!isBlocked(arr[i][j]))
            arr[i][j].className = "object"
        }
    }

    frontierQueue = [];
    exploredSet = [];
    if(begin!=null)
        begin.className = "begin";
    if(end!=null)
        end.className = "end";
clearEvents();
}

document.getElementById("Generate").onclick = function() 
{
    Clk("Generate");
    this.className = "MyBtn";

    //later remove this
    document.getElementById("reset").click();

    arr[0][0].className = "block";
    arr[1][0].className = "block";
    arr[2][0].className = "block";
    arr[3][0].className = "block";
    arr[2][1].className = "block";
    arr[3][1].className = "block";
    arr[2][2].className = "block";
    arr[3][2].className = "block";
    arr[0][4].className = "block";
    arr[1][4].className = "block";
    arr[2][4].className = "block";
    arr[0][5].className = "block";
    arr[1][5].className = "block";
    arr[2][5].className = "block";
    arr[0][8].className = "block";
    arr[1][8].className = "block";
    arr[2][8].className = "block";
    arr[0][9].className = "block";
    arr[1][9].className = "block";
    arr[2][9].className = "block";
    arr[0][10].className = "block";
    arr[1][10].className = "block";
    arr[2][10].className = "block";
    arr[0][16].className = "block";
    arr[1][16].className = "block";
    arr[0][17].className = "block";
    arr[1][17].className = "block";
    arr[0][18].className = "block";
    arr[1][18].className = "block";
    arr[0][19].className = "block";
    arr[1][19].className = "block";
    arr[2][16].className = "block";
    arr[3][16].className = "block";
    arr[4][16].className = "block";
    arr[5][16].className = "block";
    arr[6][16].className = "block";
    arr[7][16].className = "block";
    arr[3][19].className = "block";
    arr[4][19].className = "block";
    arr[5][19].className = "block";
    arr[6][19].className = "block";
    arr[7][19].className = "block";
    arr[8][19].className = "block";
    arr[6][2].className = "block";
    arr[7][8].className = "block";
    arr[8][8].className = "block";
    arr[9][8].className = "block";
    arr[10][8].className = "block";
    arr[11][8].className = "block";
    arr[9][9].className = "block";
    arr[9][10].className = "block";
    arr[9][7].className = "block";
    arr[9][6].className = "block";
    arr[5][13].className = "block";
    arr[5][14].className = "block";
    arr[6][13].className = "block";
    arr[6][14].className = "block";
    arr[7][13].className = "block";
    arr[7][14].className = "block";
    arr[8][13].className = "block";
    arr[8][14].className = "block";
    arr[9][13].className = "block";
    arr[9][14].className = "block";
    arr[12][0].className = "block";
    arr[12][1].className = "block";
    arr[12][2].className = "block";
    arr[12][3].className = "block";
    arr[12][4].className = "block";
    arr[13][18].className = "block";
    arr[13][17].className = "block";
    arr[13][16].className = "block";
    arr[13][15].className = "block";
    arr[13][14].className = "block";
    arr[13][13].className = "block";
    arr[13][12].className = "block";
    arr[15][18].className = "block";
    arr[15][17].className = "block";
    arr[15][16].className = "block";
    arr[15][15].className = "block";
    arr[15][14].className = "block";
    arr[15][13].className = "block";
    arr[15][12].className = "block";
    arr[16][18].className = "block";
    arr[16][17].className = "block";
    arr[16][16].className = "block";
    arr[16][15].className = "block";
    arr[16][14].className = "block";
    arr[16][13].className = "block";
    arr[16][12].className = "block";
    arr[17][18].className = "block";
    arr[17][17].className = "block";
    arr[17][16].className = "block";
    arr[17][15].className = "block";
    arr[17][14].className = "block";
    arr[17][13].className = "block";
    arr[17][12].className = "block";
    arr[19][15].className = "block";
    arr[19][16].className = "block";
    arr[18][0].className = "block";
    arr[18][1].className = "block";
    arr[18][2].className = "block";
    arr[18][3].className = "block";
    arr[18][4].className = "block";
    arr[18][5].className = "block";
    arr[18][6].className = "block";
    arr[18][7].className = "block";
    arr[19][2].className = "block";
    arr[19][3].className = "block";
    arr[17][0].className = "block";
    arr[17][1].className = "block";
    arr[17][2].className = "block";
    arr[15][1].className = "block";
    arr[15][2].className = "block";
    arr[15][3].className = "block";
    arr[16][1].className = "block";
    arr[16][2].className = "block";
    arr[16][3].className = "block";
    arr[17][6].className = "block";
    arr[16][6].className = "block";
    arr[15][6].className = "block";
    arr[14][6].className = "block";
    arr[13][6].className = "block";
    arr[12][6].className = "block";
    arr[13][7].className = "block";
    arr[13][8].className = "block";
    arr[14][7].className = "block";
    arr[14][8].className = "block";
    arr[15][7].className = "block";
    arr[15][8].className = "block";

    begin=arr[6][0];
    begin.className="begin";
    end=arr[12][19];
    end.className="end";
    clearEvents();
}

/*
////////////////////////////////////////////////////////////////////////////
Search algorithms start here
////////////////////////////////////////////////////////////////////////////
*/


GetY = function(element)
{
    return Math.floor(element.getAttribute("place")/20);
}

GetX = function(element)
{
    return element.getAttribute("place")%20;
}

isBlocked = function(y,x)
{
    if(arr[y][x].className=="block")
    {
        return true;
    }
    else
    {
        return false
    }
}

isBlocked = function(Square)
{
    if(Square.className=="block")
    {
        return true;
    }
    else
        return false;
}

Walk = function(y,x)
{
    arr[y][x].className = "route";
}

NodeExistsWithin = function(list, _place)
{
    let len = list.length;
    let i;
    for(i=0 ; i<len; i++)
    {
        if(_place == list[i].place)
        {
            return true;
        }
    };
    return false;
}

var exploredSet = [];
var frontierQueue = [];

class TreeNode
{
    constructor(square,parent)
    {
        this.children = [];
        this.parent=parent;
        this.place=square;
        frontierQueue.push(this);
        this.depth = 0;
        if(parent!=null)
            this.depth = parent.depth+1;
        this.hn = Math.abs(GetX(this.place) - GetX(end)) + Math.abs(GetY(this.place) - GetY(end));
        this.fn = this.hn + this.depth; // gn is depth
        //this.depth=parent.depth+1 if(parent==null) depth=0 -> depth is also g(n). depth of final node is routelength!
    }

    explore()
    {
        var y=GetY(this.place);
        var x=GetX(this.place);

        Walk(y,x);

        //removes current node from frontier and adds it to explored set
        exploredSet.push(this);

        let PossibleChoices = [];
        if(y!=0)
        {
            PossibleChoices.push(arr[y-1][x]);
        }
        if(y!=19)
        {
            PossibleChoices.push(arr[y+1][x]);
        }
        if(x!=0)
        {
            PossibleChoices.push(arr[y][x-1]);
        }
        if(x!=19)
        {
            PossibleChoices.push(arr[y][x+1]);
        }
        var elem;
        while(PossibleChoices.length != 0)
        {
            elem = PossibleChoices.shift();
            if(!isBlocked(elem) && !NodeExistsWithin(exploredSet,elem) && !NodeExistsWithin(frontierQueue,elem))
            {
                this.children.push(new TreeNode(elem,this));
            }
        };
    }

    CalculateRouteLength()
    {
        let tmp_node = this;
        //let RouteLength = -1; 
        while(tmp_node!=null)
        {
            tmp_node.place.className = "found";
            tmp_node = tmp_node.parent;
        }
        end.className="end";
        begin.className = "begin";
        return this.depth;
    }
}


BreadthFirst = function(begin,end)
{
    found=false;
    let tmp = new TreeNode(begin,null);
    //var cnt =0;
    while(frontierQueue.length!=0)
    {
       tmp = frontierQueue.shift();
       if(tmp.place == end)
       {
           found=true;
           break;
       }
       tmp.explore();
    }


    if(found)
    {
        tmp.place.className="found";
        report.innerHTML = "destination found!";
        report.innerHTML += "<br>distance is: " + tmp.CalculateRouteLength();
    }
    else
        report.innerHTML = "no possible route to the destination";
    report.innerHTML += "<br> number of explored nodes: " + exploredSet.length;
}

IterativeDepthfirst = function(begin,end)
{
    report.innerHTML="";
    found=false;
    var total =0;
    var deadend=true;
    var i;
    var tmp;
    for(i=1; i<400; i++)
    {
        deadend=true;
        tmp = new TreeNode(begin,null);
        while(frontierQueue.length!=0)
        {
            tmp = frontierQueue.pop();
            if(tmp.depth>i)
            {
                deadend=false;
                continue;
            }
            if(tmp.place == end)
            {
                found=true;
                break;
            }
            tmp.explore();
        }

        total += exploredSet.length;
        report.innerHTML += "<br> number of nodes explored in iteration " + i + ": " + exploredSet.length;
        report.innerHTML += "<br> -------------------"

        if(found || deadend)
        {
            break;
        }
        exploredSet= [];
        frontierQueue =[];
    }

    report.innerHTML += "<br> total number of nodes explored: " + total;

    if(found)
    {
        tmp.place.className="found";
        report.innerHTML += "<br>destination found!";
        report.innerHTML += "<br> distance is: " + tmp.CalculateRouteLength();
    }
    else
        report.innerHTML +="no possible route to the destination";
}


A_Star = function(begin,end)
{
    found=false;
    let tmp = new TreeNode(begin,null);
    //var cnt = 0;
    while(frontierQueue.length!=0)
    {
       tmp = frontierQueue.shift();
       if(tmp.place == end)
       {
           found=true;
           break;
       }
       tmp.explore();
       frontierQueue.sort(function(a, b){if(a.fn==b.fn)return -0.5 ;return a.fn-b.fn})
    }

    if(found)
    {
        tmp.place.className="found";
        report.innerHTML = "destination found!";
        report.innerHTML += "<br> distance is: " + tmp.CalculateRouteLength();
    }
    else
        report.innerHTML ="no possible route to the destination";
    report.innerHTML += "<br> number of explored nodes: " + exploredSet.length;
}

//////////////////////////////welcome to main function
document.getElementById("start").onclick = function()
{
    Clk("start");
    this.className="StrtBtn"

    if(exploredSet.length!=0)
    {
        alert("Please clear path before proceeding");
        return;
    }

    var CanStart = true;
    if(begin==null)
    {
        alert("NO START POINT IS SET!");
        CanStart=false;
    }
    if(end==null)
    {
        alert("NO END POINT IS SET!");
        CanStart=false;
    }
    if(CanStart)
    {
        if (document.getElementById('BreadthFirst').checked) 
            BreadthFirst(begin,end);
        else if(document.getElementById('IterativeDeepening').checked)
            IterativeDepthfirst(begin,end);
        else if(document.getElementById('AStar').checked)
            A_Star(begin,end);
        else 
            alert("please select search algorithm")
    }

clearEvents();
}