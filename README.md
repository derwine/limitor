<p>
Limitor is a class based implementation of a function rate limiter / debouncer.
It uses setInterval to create a running clock used to enforce the rate, and reset every x millisecons.
See the source for details. 
</p>

# Basic Usage #
## Create an instance of Limitor. 
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

Run function through the lm instance.
<pre>
lm.exec(() => {
    addNums(2,3);
})
</pre>
