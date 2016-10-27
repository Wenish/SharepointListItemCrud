## Sharepoint 2013 REST API List Item Crud
A Sharepoint 2013 Rest API CRUD Class for JavaScript.

### Dependency
It depends on jQuery

### Install
The body of ur .aspx file should look something like this:

```
<body>
    <!-- Sharepoint Auth From -->
    <form runat="server">
        <SharePoint:FormDigest ID="FormDigest1" runat="server"></SharePoint:FormDigest>
    </form>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="sharepointListItemCrud.js"></script>
</body>
```
### Usage

First u need to create a new SharepointListItemCrud object.
```
var app = app || {}
app.crud = new SharepointListItemCrud()
```

Now u have access to 4 functions:
```
app.crud.create(listName, data, options)
app.crud.read(listName, options)
app.crud.update(listName, id, data, options)
app.crud.delete(listName, id, options)
```

##### Create
```
//Sharepoint List Name (required)
var listName = 'List1'

//Ur Metadata object (required)
var data = {
    '__metadata': {
        'type': 'SP.Data.List1ListItem'
    },
    Title: "new List Item"
}

//In the options u can define a success callback and error callback (not required)
var options = {
    successCallback: function (data) {
     console.log(data)
    },
    errorCallback: function (err) {
        console.log(JSON.stringify(err))
    }
}

//Create REST Call
app.crud.create(listName, data, options)
```
##### Read
```
//Sharepoint List Name (required)
var listName = 'List1'


//In the options u can define a query, success callback and error callback (not required)
var options = {
    query: '?$select=Title',
    successCallback: function (data) {
     console.log(data)
    },
    errorCallback: function (err) {
        console.log(JSON.stringify(err))
    }
}

//Read REST Call
app.crud.read(listName, options)
```
##### Update
```
//Sharepoint List Name (required)
var listName = 'List1'

//The id of the item u want to update (required)
var id = 1

//Ur metadata object (required)
var data = {
    '__metadata': {
        'type': 'SP.Data.List1ListItem'
    },
    Title: "updated List Item"
}

//In the options u can define a success callback and error callback (not required)
var options = {
    successCallback: function (data) {
     console.log(data)
    },
    errorCallback: function (err) {
        console.log(JSON.stringify(err))
    }
}

//Update REST Call
app.crud.update(listName, id, data, options)
```
##### Delete
```
//Sharepoint List Name (required)
var listName = 'List1'

//The id of the item u want to delete (required)
var id = 1

//In the options u can define a success callback and error callback (not required)
var options = {
    successCallback: function (data) {
     console.log(data)
    },
    errorCallback: function (err) {
        console.log(JSON.stringify(err))
    }
}

//Delete REST Call
app.crud.delete(listName, id, options)
```

## License
The MIT License (MIT)

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
