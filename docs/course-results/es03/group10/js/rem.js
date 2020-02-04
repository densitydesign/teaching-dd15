$(document).ready(function() {
      
  $("#STEP1").click(function(){
  $("#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();  
  });
    
  $("#STEP1").click(function(){
  $("#RUBBISH").toggle();
}); 
    
    $("#STEP1, #RUBBISH").hover(function() {
    $("#PARK, #METRO_1_, #SCHOOL_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#PARK, #METRO_1_, #SCHOOL_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
    
    
    
    
    
    $("#STEP2").click(function(){
    $("#STEP1,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP2").click(function(){
  $("#RUN").toggle();
}); 
    
    $("#STEP2, #RUN").hover(function() {
    $("#COMMUNITY, #METRO_1_, #SCHOOL_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #METRO_1_, #SCHOOL_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
     
    
    
    
    
    $("#STEP3").click(function(){
    $("#STEP1,#STEP2,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP3").click(function(){
  $("#SUBWAY").toggle();
}); 
    
    $("#STEP3, #SUBWAY").hover(function() {
    $("#COMMUNITY, #PARK, #SCHOOL_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #SCHOOL_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
        
    
    
    
    
    $("#STEP4").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP4").click(function(){
  $("#STUDY").toggle();
}); 
    
    $("#STEP4, #STUDY").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
         
    
    
    
    
    $("#STEP5").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP5").click(function(){
  $("#TEACHER").toggle();
}); 
    
    $("#STEP5, #TEACHER").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #POLICE, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
          
    
    
    
    
    $("#STEP6").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP6").click(function(){
  $("#MISSING").toggle();
}); 
    
    $("#STEP6, #MISSING").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
              
    
    
    
    
    $("#STEP7").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP7").click(function(){
  $("#SECURITY").toggle();
}); 
    
    $("#STEP7, #SECURITY").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #POLICE, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #POLICE, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
        
    
    
    
    $("#STEP8").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP8").click(function(){
  $("#CRIME").toggle();
}); 
    
    $("#STEP8, #CRIME").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #BANK, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
            
    
    
    
    $("#STEP9").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP9").click(function(){
  $("#MONEY").toggle();
}); 
    
    $("#STEP9, #MONEY").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #POLICE, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #GOVERNMENT, #POLICE, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
                
    
    
    
    $("#STEP10").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP10").click(function(){
  $("#AFFAIRS").toggle();
}); 
    
    $("#STEP10, #AFFAIRS").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #BANK, #POLICE, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #AIRPORT, #CROSSING, #BANK, #POLICE, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
                    
    
    
    
    $("#STEP11").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP11").click(function(){
  $("#BOARDING").toggle();
}); 
    
    $("#STEP11, #BOARDING").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #CROSSING, #BANK, #POLICE, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #CROSSING, #BANK, #POLICE, #SUPERMARKET, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
                        
    
    
    
    $("#STEP12").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP13,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP12").click(function(){
  $("#FOOD").toggle();
}); 
    
    $("#STEP12, #FOOD").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #CROSSING, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #CROSSING, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
                            
    
    
    
    $("#STEP13").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP14,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP13").click(function(){
  $("#WC").toggle();
}); 
    
    $("#STEP13, #WC").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #CROSSING, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #CROSSING, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
                                
    
    
    
    $("#STEP14").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP15,#STEP16").toggle();
  });
    
  $("#STEP14").click(function(){
  $("#ROAD").toggle();
}); 
    
    $("#STEP14, #ROAD").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #SUPERMARKET, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #SUPERMARKET, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #TRAIN, #BACKGROUND").css("opacity",1);
    
    });
                                    
    
    
    
    $("#STEP15").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP16").toggle();
  });
    
  $("#STEP15").click(function(){
  $("#TICKET").toggle();
}); 
    
    $("#STEP15, #TICKET").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #SUPERMARKET, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #CROSSING, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #SUPERMARKET, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #CROSSING, #BACKGROUND").css("opacity",1);
    
    });
                                        
    
    
    
    $("#STEP16").click(function(){
    $("#STEP1,#STEP2,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15").toggle();
  });
    
  $("#STEP16").click(function(){
  $("#ENTRANCE").toggle();
}); 
    
    $("#STEP16, #ENTRANCE").hover(function() {
    $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #SUPERMARKET, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #CROSSING, #BACKGROUND").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#COMMUNITY, #PARK, #METRO_1_, #GOVERNMENT, #SUPERMARKET, #BANK, #POLICE, #AIRPORT, #SCHOOL_1_, #CROSSING, #BACKGROUND").css("opacity",1);
    
    });

    
    
       $("#LINK12").click(function(){
  window.open('http://www.ak186.com/yule/557905.html'); 
}); 

    
    $("#LINK13").click(function(){
  window.open('http://www.sohu.com/a/326161831_114988');
});
    
  $("#LINK11").click(function(){
  window.open ('https://baijiahao.baidu.com/s?id=1637496460172838956&wfr=spider&for=pc');
});  

    $("#LINK21").click(function(){
  window.open('http://sh.ihouse.ifeng.com/news/2017_05_15-51082496_0.shtml');
}); 

    $("#LINK22").click(function(){
  window.open('http://m.huxiu.com/article/324525.html');
}); 
    
    $("#LINK23").click(function(){
  window.open('http://www.centv.cn/p/341833.html');
}); 
    
    $("#LINK24").click(function(){
  window.open('http://beijing.qianlong.com/2018/1104/2920664.shtml');
}); 
    
    $("#LINK31").click(function(){
  window.open('http://www.huatu.com/lsgk/news/20191030/1798426.html');
}); 
    
    $("#LINK32").click(function(){
  window.open('https://baijiahao.baidu.com/s?id=1630768821626788373&wfr=spider&for=pc');
}); 
    
    $("#LINK33").click(function(){
  window.open('http://sh.ihouse.ifeng.com/news/2017_05_15-51082496_0.shtml');
}); 
    
    $("#LINK41").click(function(){
  window.open('http://news.jstv.com/a/20190917/5ddaaf67fe344a3b9ac1ac3c4f25a732.shtml');
}); 
    
    $("#LINK42").click(function(){
  window.open('http://edu.sina.com.cn/gaokao/2019-09-10/doc-iicezzrq4747497.shtml');
}); 
    
    $("#LINK43").click(function(){
  window.open('http://gz.southcn.com/content/2018-09/04/content_183170315.htm');
}); 
    
    $("#LINK51").click(function(){
 window.open('http://baijiahao.baidu.com/s?id=1643638942380772740&wfr=spider&for=pc');
}); 
    
    $("#LINK52").click(function(){
  window.open('http://guancha.gmw.cn/2019-09/03/content_33132945.htm');
}); 
    
    $("#LINK53").click(function(){
  window.open('http://baijiahao.baidu.com/s?id=1643883242191488152&wfr=spider&for=pc');
}); 
    
    $("#LINK54").click(function(){
  window.open('https://new.qq.com/omn/20190903/20190903A03AUR00.html');
}); 
    
    $("#LINK61").click(function(){
  window.open('http://www.xinhuanet.com/2019-06/14/c_1124620736.htm');
}); 
    
    $("#LINK62").click(function(){
  window.open('http://www.huaweishijie.com/news/50');
}); 
    
    $("#LINK63").click(function(){
  window.open('http://www.bjnews.com.cn/inside/2019/09/09/624474.html');
}); 
    
    $("#LINK81").click(function(){
  window.open('http://www.atyun.com/48138.html');
}); 
    
    $("#LINK82").click(function(){
  window.open('http://www.xinhuanet.com/2018-04/05/c_1122640483.htm');
});
    
    $("#LINK83").click(function(){
  window.open('http://news.sina.com.cn/c/2018-07-14/doc-ihfhfwmv1019453.shtml');
});
    
    $("#LINK71").click(function(){
  window.open('http://m.xinhuanet.com/2017-04/07/c_1120766621.htm');
});
    
    $("#LINK72").click(function(){
  window.open('https://world.chinadaily.com.cn/a/201911/14/WS5dccffe2a31099ab995ebf18.html');
});
    
    $("#LINK73").click(function(){
  window.open('http://m.anzhixun.com/news/201908/21103044.htm');
});
    
    $("#LINK74").click(function(){
  window.open('https://zhuanlan.zhihu.com/p/58033163');
});
    
    $("#LINK111").click(function(){
  window.open('https://zhuanlan.zhihu.com/p/65274163');
});
    
    $("#LINK112").click(function(){
  window.open('http://bank.jrj.com.cn/2018/01/18093823965992.shtml');
});
    
    $("#LINK113").click(function(){
  window.open('https://zhuanlan.zhihu.com/p/65274163');
});
    
    $("#LINK101").click(function(){
  window.open('https://h5.newaircloud.com/detailArticle?sid=ltxw&newsId=9132467_34294_ltxw');
});
    
    $("#LINK102").click(function(){
  window.open('http://www.szshenshu.com/imp_new/206-cn.html');
});
    
    $("#LINK103").click(function(){
  window.open('http://www.infoobs.com/20191108/35813.html');
});
    
    $("#LINK91").click(function(){
  window.open('https://www.kannewyork.com/news/2019/03/31/60999.html');
});
    
    $("#LINK92").click(function(){
  window.open('https://cloud.tencent.com/developer/news/67374');
});
    
    $("#LINK93").click(function(){
  window.open('https://tech.sina.com.cn/i/2019-10-06/doc-iicezzrr0348053.shtml');
});
    
    $("#LINK121").click(function(){
  window.open('http://cq.cbg.cn/ycxw/2019/0117/11027227.shtml');
});
    
    $("#LINK122").click(function(){
  window.open('http://www.xinhuanet.com/zgjx/2019-02/26/c_137850939.htm');
});
    
    $("#LINK123").click(function(){
  window.open('https://www.pingwest.com/a/181870');
});
    
    $("#LINK124").click(function(){
  window.open('https://static.nfapp.southcn.com/content/201812/07/c1734366.html');
});
    
    $("#LINK131").click(function(){
  window.open('http://face.ailab.cn/article-83503.html');
});
    
    $("#LINK132").click(function(){
  window.open('http://www.xinhuanet.com//politics/2017-03/21/c_129514623.htm');
});
    
    $("#LINK133").click(function(){
  window.open('http://www.wenming.cn/dfcz/js/201807/t20180718_4763893.shtml');
});
    
    $("#LINK141").click(function(){
  window.open('http://news.eeworld.com.cn/mp/leiphone/a30741.jspx');
});
    
    $("#LINK142").click(function(){
  window.open('http://www.legaldaily.com.cn/fxjy/content/2018-04/25/content_7530087.htm?node=89853');
});
    
    $("#LINK143").click(function(){
  window.open('hhttp://www.chinanews.com/sh/2017/06-13/8249061.shtml');
});
    
    $("#LINK144").click(function(){
  window.open('https://m.online.sh.cn/news/content/2019-05/28/content_929607');
});
    
    $("#LINK145").click(function(){
  window.open('https://36kr.com/p/5132579');
});
    
    $("#LINK151").click(function(){
  window.open('http://cq.sina.com.cn/city/csgz/2019-08-26/city-ihytcitn2053462.shtml');
});
    
    $("#LINK152").click(function(){
  window.open('http://3g.gaotie.cn/Show.php?ID=517346');
});
    
    $("#LINK161").click(function(){
  window.open('https://ihainan.ifeng.com/6334983/news.shtml?srctag=pc2m&back');
});
    
    $("#LINK162").click(function(){
  window.open('https://cloud.tencent.com/developer/article/1142708');
});
    
    $("#LINK163").click(function(){
  window.open('http://xkctk.hangzhou.gov.cn/NewsReproduce/20181126/1543198648077_1.html');
        
        $("#FEEDBACK").click(function(){
  window.open('index.html');
})
})
    

    
    
    $("#STEP2, #STEP1,#STEP3,#STEP4,#STEP5,#STEP6,#STEP7,#STEP8,#STEP9,#STEP10,#STEP11,#STEP12,#STEP13,#STEP14,#STEP15,#STEP16").css('cursor', 'pointer');
    
    $("#LINK11,#LINK12,#LINK13,#LINK21,#LINK22,#LINK23,#LINK24,#LINK31,#LINK32,#LINK33,LINK41,#LINK42,#LINK43,#LINK51,#LINK52,#LINK53,#LINK54,#LINK61,#LINK62,#LINK63,LINK81,#LINK82,#LINK83,#LINK71,#LINK72,#LINK73,#LINK74,#LIN111,#LINK112,#LINK113,LINK101,#LINK102,#LINK103,#LINK91,#LINK92,#LINK93,#LINK121,#LINK122,#LINK123,#LINK124,LINK131,#LINK132,#LINK133,#LINK141,#LINK142,#LINK143,#LINK144,#LINK145,#LINK151,#LINK152,#LINK161,#LINK162,#LINK163").css('cursor', 'pointer');
    
    $("#LINK11,#LINK12,#LINK13,#LINK21,#LINK22,#LINK23,#LINK24,#LINK31,#LINK32,#LINK33,LINK41,#LINK42,#LINK43,#LINK51,#LINK52,#LINK53,#LINK54,#LINK61,#LINK62,#LINK63,LINK81,#LINK82,#LINK83,#LINK71,#LINK72,#LINK73,#LINK74,#LIN111,#LINK112,#LINK113,LINK101,#LINK102,#LINK103,#LINK91,#LINK92,#LINK93,#LINK121,#LINK122,#LINK123,#LINK124,LINK131,#LINK132,#LINK133,#LINK141,#LINK142,#LINK143,#LINK144,#LINK145,#LINK151,#LINK152,#LINK161,#LINK162,#LINK163").attr('target', '_blank');
    

});


