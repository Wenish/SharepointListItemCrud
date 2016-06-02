## SharepointListItemCrud
A Sharepoint 2013 Rest API CRUD Class for JavaScript.

### Dependency
It depends on you jQuery

### Install
The Body of ur HTML file should look something like this:

```
<body>
    <!-- Sharepoint Auth From -->
    <form runat="server">
        <SharePoint:FormDigest ID="FormDigest1" runat="server"></SharePoint:FormDigest>
    </form>

    <!-- Scripts -->
    <script src="/_layouts/15/core.js"></script>
    <script src="/_layouts/1033/init.js"></script>
    <script src="/_layouts/15/MicrosoftAjax.js"></script>
    <script src="/_layouts/15/sp.core.js"></script>
    <script src="/_layouts/15/sp.runtime.js"></script>
    <script src="/_layouts/15/sp.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="SharepointListItemCrud.js"></script>
</body>
```
### Usage

First u need to create a new SharepointListItemCrud object.
```
var spListItem = new SharepointListItemCrud()
```

Now u have access to 4 functions:
```
spListItem.create(listName, data, options)
spListItem.read(listName, options)
spListItem.update(listName, id, data, options)
spListItem.delete(listName, id, options)
```

##### Create
```
//Sharepoint List Name (required)
var listName = 'List1'

//Your Metadata object (required)
var data = {
    '__metadata': {
        'type': 'SP.Data.List1ListItem'
    },
    Title': "new List Item"
}

//In the options u can define a success and error Callback (not required)
var options = {
    successCallback: function (data) {
     console.log(data)
    },
    errorCallback: function (err) {
        console.log(JSON.stringify(err))
    }
}

//REST Call
spListItem.create(listName, data, options)
```
##### Read
##### Update
##### Delete
