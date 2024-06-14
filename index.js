var productName=document.getElementById("productName");
var productModel=document.getElementById("productModel");
var price=document.getElementById("price");
var productDesc=document.getElementById("productDesc");
var submitBtn=document.getElementById("submit-btn");
var addProductBtn=document.getElementById("addProductBtn");
var updateProductBtn=document.getElementById("updateProductBtn")
var ProductList
submitBtn.addEventListener("click", addProduct)
if(localStorage.getItem("ProductList")==null){
    ProductList=[];
}
else{
    ProductList=JSON.parse(localStorage.getItem("ProductList"))
    displayproduct(ProductList)
}
function addProduct(){
    var product={
        "name":productName.value,
        "model":productModel.value,
        "price":price.value,
        "desc":productDesc.value,
    }
    ProductList.push(product);
    console.log(product);
   


    displayproduct(ProductList);
    clearForm();
    localStorage.setItem("ProductList",JSON.stringify(ProductList))
}

function clearForm(){
    productName.value="";
    productModel.value="";
    price.value="";
    productDesc.value="";
}

function displayproduct (product){
var cartona='';
for(var i=0 ;i < product.length;i++){
    cartona +=`<tr>
    <td>${i+1}</td>
    <td> ${product[i].name} </td>
    <td> ${product[i].model} </td>
    <td> ${product[i].price} </td>
    <td> ${product[i].desc} </td>
    <td>
        <button onClick="getUpdatedProduct(${i})" class="btn btn-warning btn-sm">update</button>
    </td>
    <td>
        <button onClick="deleteProduct(${i})"class="btn btn-danger btn-sm">delete</button>
    </td>

</tr>`
}

document.getElementById("tBody").innerHTML= cartona;
}
function deleteProduct(index){
    ProductList.splice(index,1)
    localStorage.setItem("ProductList",JSON.stringify(ProductList))
    displayproduct(ProductList)
    console.log(ProductList);
    displayproduct(ProductList);
    }
    function searchByName(term){
        var foundedItems=[]
        for(var i=0;i<ProductList.length;i++){
            if(ProductList[i].name.toLowerCase().includes(term.toLowerCase())==true){
                foundedItems.push(ProductList[i]);
                
                ProductList[i].newName=ProductList[i].name.toLowerCase().replace(term.toLowerCase(),`<span class="text-danger">${term}</span>`)
            }
        }
        displayproduct(foundedItems)
    }
    function getUpdatedProduct(btee5){
        addProductBtn.classList.add("d-none")
        updateProductBtn.classList.replace('d-none','d-block')
        productName.value=ProductList[btee5].name
        productPrice.value=ProductList[btee5].price
        productModel.value=ProductList[btee5].model
        productDesc.value=ProductList[btee5].desc
    }