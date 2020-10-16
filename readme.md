<center>
    <img src='./logo.svg' width='300'>
    <br>
    <h1>Sync PHP</h1>
    this is a webpack plugin that you can use to reload php files on changes.
</center>

##Installation

####step 1
add plugin to the `webapck dev config` array
<br>

```javascript  

    const syncPhp = require('sync-php');

    plugins: [
        new syncPhp({
            port: 1337, // required
            watch: path.resolve('build/') // required
        })
    ]

```

there are two options
<br>

`  port   ` - specifes the port seprate from all the other ports

    
`  watch ` - directory you want to wath changes

<br/>

####step 2
    add `loader` to your `main.js` file at the end 
    <br/>
       
    ```javascript
        require('sync-php/client.js')(1337) // this is the same port mentioned above
    ```

    both ports should be same
<br/>

<br/>

####step 3
    `run wepack server in watch mode ` or `run dev server`
    `open your php file into browser`

    <br/>
    for php server use following command

    `php -S localhost:9000`
<br/>



<img src='./profile cover.png' width='100%'>