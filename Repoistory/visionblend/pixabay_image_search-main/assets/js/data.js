
key="45981947-a00cdb5da8569912863f50b92"
url="https://pixabay.com/api/?key="+key+"&image_type=photo&pretty=true&q="


function getImages(e){
  e.preventDefault()
  var q=$('#q').val()
  $('#imagesresult').empty()
iurl=url+q;
$.getJSON( iurl, function( data ) {
imagesdata=data.hits;
result='';
$.each( imagesdata, function( key, val ) {
  result+=`<div class='col-md-4 mb-3'>
      <img src='${val.largeImageURL}' class='card-img-top' alt='${val.tags}' title='${val.tags}' height=350px>
     </div>
`;
});
$('#imagesresult').append(result);  
})


}


