## SharepointListItemCrud
A Sharepoint 2013 Rest API CRUD Class

### Dependency
It depends on you jQuery

### Install
At the bottom of your HTML file you should have something like this:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="SharepointListItemCrud.js"></script>
```
### Usage

First u need to create a new SharepointListItemCrud object.
```
var spListItemCrud = new SharepointListItemCrud()
```

Now u have access to 4 functions:
```
spListItemCrud.create(listName, data, options)
spListItemCrud.read(listName, id, options)
spListItemCrud.update(listName, options)
spListItemCrud.deletelistName(listName, id, data, options)
```
