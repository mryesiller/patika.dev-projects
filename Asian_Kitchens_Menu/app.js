const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const section=document.getElementById("section")


const allMenu=()=>{

  menu.map((item)=>{
      
    const div_b = document.createElement('DIV')
    const div_b_att=document.createAttribute('class')
    div_b_att.value="menu-items col-lg-6 col-sm-12"
    div_b.setAttributeNode(div_b_att)

    const img=document.createElement('img')
    const img_att=document.createAttribute('class')
    img_att.value="photo"
    img.setAttributeNode(img_att)
    
    const div_o=document.createElement('DIV')
    const div_o_att=document.createAttribute('class')
    div_o_att.value="menu-info"
    div_o.setAttributeNode(div_o_att)

    const div_title=document.createElement('DIV')
    const div_title_att=document.createAttribute('class')
    div_title_att.value="menu-title"
    div_title.setAttributeNode(div_title_att)

    const h4_name=document.createElement('H4')    

    const h4_price=document.createElement('H4')
    const h4_price_att=document.createAttribute('class')
    h4_price_att.value="price"
    h4_price.setAttributeNode(h4_price_att)

    const div_text=document.createElement('DIV')
    const div_text_att=document.createAttribute('class')
    div_text_att.value="menu-text"
    div_text.setAttributeNode(div_text_att)

    img.src=item.img
    h4_name.innerHTML=item.name  
    h4_price.innerHTML=item.price
    div_text.innerHTML=item.desc

    div_title.appendChild(h4_name)
    div_title.appendChild(h4_price)

    div_o.appendChild(div_title)
    div_o.appendChild(div_text)

    div_b.appendChild(img)
    div_b.appendChild(div_o)
    
    section.appendChild(div_b)

  })

}

const koreaMenu=()=>{

  section.innerHTML=""
  menu.map((item)=>{
    if(item.category=="Korea"){
      const div_b = document.createElement('DIV')
      const div_b_att=document.createAttribute('class')
      div_b_att.value="menu-items col-lg-6 col-sm-12"
      div_b.setAttributeNode(div_b_att)

      const img=document.createElement('img')
      const img_att=document.createAttribute('class')
      img_att.value="photo"
      img.setAttributeNode(img_att)
    
      const div_o=document.createElement('DIV')
      const div_o_att=document.createAttribute('class')
      div_o_att.value="menu-info"
      div_o.setAttributeNode(div_o_att)

      const div_title=document.createElement('DIV')
      const div_title_att=document.createAttribute('class')
      div_title_att.value="menu-title"
      div_title.setAttributeNode(div_title_att)

      const h4_name=document.createElement('H4')    

      const h4_price=document.createElement('H4')
      const h4_price_att=document.createAttribute('class')
      h4_price_att.value="price"
      h4_price.setAttributeNode(h4_price_att)

      const div_text=document.createElement('DIV')
      const div_text_att=document.createAttribute('class')
      div_text_att.value="menu-text"
      div_text.setAttributeNode(div_text_att)

      img.src=item.img
      h4_name.innerHTML=item.name  
      h4_price.innerHTML=item.price
      div_text.innerHTML=item.desc

      div_title.appendChild(h4_name)
      div_title.appendChild(h4_price)

      div_o.appendChild(div_title)
      div_o.appendChild(div_text)

      div_b.appendChild(img)
      div_b.appendChild(div_o)
    
      section.appendChild(div_b)
    }
  })
}

const japanMenu=()=>{

  section.innerHTML=""
  menu.map((item)=>{
    if(item.category=="Japan"){
      const div_b = document.createElement('DIV')
      const div_b_att=document.createAttribute('class')
      div_b_att.value="menu-items col-lg-6 col-sm-12"
      div_b.setAttributeNode(div_b_att)

      const img=document.createElement('img')
      const img_att=document.createAttribute('class')
      img_att.value="photo"
      img.setAttributeNode(img_att)
    
      const div_o=document.createElement('DIV')
      const div_o_att=document.createAttribute('class')
      div_o_att.value="menu-info"
      div_o.setAttributeNode(div_o_att)

      const div_title=document.createElement('DIV')
      const div_title_att=document.createAttribute('class')
      div_title_att.value="menu-title"
      div_title.setAttributeNode(div_title_att)

      const h4_name=document.createElement('H4')    

      const h4_price=document.createElement('H4')
      const h4_price_att=document.createAttribute('class')
      h4_price_att.value="price"
      h4_price.setAttributeNode(h4_price_att)

      const div_text=document.createElement('DIV')
      const div_text_att=document.createAttribute('class')
      div_text_att.value="menu-text"
      div_text.setAttributeNode(div_text_att)

      img.src=item.img
      h4_name.innerHTML=item.name  
      h4_price.innerHTML=item.price
      div_text.innerHTML=item.desc

      div_title.appendChild(h4_name)
      div_title.appendChild(h4_price)

      div_o.appendChild(div_title)
      div_o.appendChild(div_text)

      div_b.appendChild(img)
      div_b.appendChild(div_o)
    
      section.appendChild(div_b)
    }
  })
}

const chinaMenu=()=>{

  section.innerHTML=""
  menu.map((item)=>{
    if(item.category=="China"){
      const div_b = document.createElement('DIV')
      const div_b_att=document.createAttribute('class')
      div_b_att.value="menu-items col-lg-6 col-sm-12"
      div_b.setAttributeNode(div_b_att)

      const img=document.createElement('img')
      const img_att=document.createAttribute('class')
      img_att.value="photo"
      img.setAttributeNode(img_att)
    
      const div_o=document.createElement('DIV')
      const div_o_att=document.createAttribute('class')
      div_o_att.value="menu-info"
      div_o.setAttributeNode(div_o_att)

      const div_title=document.createElement('DIV')
      const div_title_att=document.createAttribute('class')
      div_title_att.value="menu-title"
      div_title.setAttributeNode(div_title_att)

      const h4_name=document.createElement('H4')    

      const h4_price=document.createElement('H4')
      const h4_price_att=document.createAttribute('class')
      h4_price_att.value="price"
      h4_price.setAttributeNode(h4_price_att)

      const div_text=document.createElement('DIV')
      const div_text_att=document.createAttribute('class')
      div_text_att.value="menu-text"
      div_text.setAttributeNode(div_text_att)

      img.src=item.img
      h4_name.innerHTML=item.name  
      h4_price.innerHTML=item.price
      div_text.innerHTML=item.desc

      div_title.appendChild(h4_name)
      div_title.appendChild(h4_price)

      div_o.appendChild(div_title)
      div_o.appendChild(div_text)

      div_b.appendChild(img)
      div_b.appendChild(div_o)
    
      section.appendChild(div_b)
    }
  })
}
allMenu()