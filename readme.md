
# Create an instance of Limitor. 
## Pass in the max_actions, interval and verbose console.
<pre>
    var lm = new Limitor(3, 2000, true);
    lm.init();
</pre>

## Basic function to execute.
<pre/>
    let addNums = (x, y) => {
    result = x + y;
    console.log(result);
    }
</pre>
    btn = document.createElement('button');
    btn.innerText = "Click me";
    document.body.appendChild(btn);
<pre>
    btn.addEventListener('click', (e)=>{
        lm.exec(() => {
            addNums(2,3);
        })
    })
</pre>