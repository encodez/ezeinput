#EZE INPUT

jQuery mention input

Please follow this link for periodic updates on the documentation http://blog.encodez.com/downloads/ezeinput


## Dependencies

jQuery library

`<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>`


## Installation

Link the style sheet at the header section

`<link href="jquery.ezeinput.css" media="all" rel="stylesheet" type="text/css" />`

Attach the jquery plugin. Usually before the body close tag is more preferable.

`<script src="jquery.ezeinput.min.js"></script>`


### Installation Script

**HTML**

```
<div>
   <input type="text" value="" id="names" class="ezeinput" /> <br />
   Enter comma seperated values
</div>
<div>
   <input type="button" value="Get Names" id="btn_get_values" />
   <input type="button" value="Clear" id="btn_clear_values" />
</div>
```


**Javascript**

## Initialize

`$(".ezeinput").ezeInput();`

## Options

close_button : default (close.gif)
key_sperator : default 188 (comma)

```
$(".ezeinput").ezeInput({
    close_button: 'close.gif',
    key_sperator: 188
});
```


**Get Values**

Returns a JSON object of the input values.

`ezeInput('get');`

```
var vals = $("#names").ezeInput('get');
alert(JSON.stringify(vals));
```


**clear Values**

`ezeInput('clear');`

`$("#names").ezeInput('clear');`