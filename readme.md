<img src='./logo.svg' width='300'>
<br>
# Sync PHP

> this is a webpack plugin that you can use to reload php files on changes.

## Installation

#### step 1
> add plugin to the `webapck.dev.config.js` array

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

`port` 
- > use the port seprate from all the other ports

    
`watch`
- > directory you want to wath changes

<br/>

#### step 2
add `loader` to your `main.js` file at the end 
<br/>
    
```javascript
require('sync-php/client.js')(1337) 
// this is the same port mentioned above
```

both ports should be same
<br/>

<br/>

#### step 3

`run wepack server in watch mode ` or `run dev server`
`open your php file into browser`

<br/>

> for __php server__ use following command

`php -S localhost:9000`
<br/>



<img src='./profile cover.png' width='100%'>