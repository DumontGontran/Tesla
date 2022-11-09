async function getArticleData() {
  let params = new URLSearchParams(document.location.search);
  let id = params.get('id');

  const res = await fetch(`http://localhost:5500/src/data/data.json`);
  let article = await res.json();
  article = article.filter(x => x.id == id);
  return article;
}

async function displayArticle() {
  let article = await getArticleData();
  for (i = 0; i < article[0].colors.length; i++) {
    document.querySelector('.article').innerHTML = `<form>
    <h1 class="font-semibold text-4xl m-3 text-white">${article[0].model}</h1>
    <span class="text-2xl m-3 text-white">${article[0].description}</span>
    <div class="flex-row m-2">
      <label for="colors" class="text-white">Choose the color:*</label>
      <select id="colors" class="form_infos relative left-[2.645rem]" required>
      </select>
    </div>
    <div class="flex-row m-2">
      <label for="quantity" class="text-white">Choose the quantity:*</label>
      <input type="number" name="quantity" id="quantity" value="1" min="1" max="100" class="form_infos w-[8.3rem]" required>
    </div>
    <span class="text-2xl text-white font-semibold absolute top-2 right-2">${article[0].price}</span>
    <input type="submit" value="Buy it" class="buttons order cursor-pointer mx-auto w-[18rem]">
  </form>`

    article[0].colors.forEach((color) => {
      const colors = document.querySelector('#colors');
      let colorOption = document.createElement('option');
      colorOption.textContent = `${color}`;
      colorOption.value = `${color}`;
      colors.appendChild(colorOption);
    });
  }
}
displayArticle();