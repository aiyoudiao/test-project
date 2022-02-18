
module.exports = {
    themeConfig:{
      title:"Element3",
      description:"vuepress搭建的Element3文档",
      logo:"/element3.svg",
      navbar:[
        {
          link:"/",
          text:"首页"
        },{
          link:"/install",
          text:"安装"
        },
      ],
      sidebar:[ { text:'安装', link:'/install' }, { text:'按钮', link:'/button' }, ]
  
    }
  }