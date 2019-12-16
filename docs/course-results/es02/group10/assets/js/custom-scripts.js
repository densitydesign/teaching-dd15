// This is Javascript code to make the example in question02 work, feel free to remove this when you start working on your project
$(document).ready(function() {

    $('.bubble').on('click', function(event) {

        event.stopPropagation();
        let listIndex = $(event.currentTarget).index() + 1;

        $('.label').removeClass('is-visible');
        $('.label:nth-child(' + listIndex + ')').addClass('is-visible');

    });

    $(':not(.bubble)').on('click', function(event) {

        // console.log('event fired!');
        $('.label').removeClass('is-visible');

    });

    $('.legend__item').on('mouseenter', function(event) {

        // console.log($(event.currentTarget).attr("data-area"));
        let area = $(event.currentTarget).attr("data-area");

        $('.label').removeClass('is-visible');

        $('.legend__item').addClass('is-out-focus');
        $(event.currentTarget).removeClass('is-out-focus');

        $('.bubble').addClass('is-out-focus');
        $('.' + area).removeClass('is-out-focus');

    }).on('mouseleave', function(event) {

        $('.bubble').removeClass('is-out-focus');
        $('.legend__item').removeClass('is-out-focus');

    });
    
    
    $("#privacy").hover(function() {
    $("#gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
   
    $("#gdpr").hover(function() {
    $("#privacy, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#police").hover(function() {
    $("#privacy, #gdpr, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#data").hover(function() {
    $("#privacy, #gdpr, #police, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#ai").hover(function() {
    $("#privacy, #gdpr, #police, #data, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
     $("#Facebook").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#security").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#china").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#america").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#bias").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#surveillance").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#biometrics").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#google").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#london").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#amazon").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#airport").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#convenience").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#ethics").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#payment").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#law").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#controversy").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#alibaba").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#smatrphone").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#securitycheck").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #safety, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#safety").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #camera, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#camera").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #facialid, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#facialid").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #antifacial, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #antifacial, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#antifacial").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #school, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #school, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#school").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #tech, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #tech, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#tech").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #fight, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #fight, #layer2").css("opacity",1);
    
    });
    
    $("#fight").hover(function() {
    $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #layer2").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#privacy, #gdpr, #police, #data, #ai, #Facebook, #security, #china, #america, #bias, #surveillance, #biometrics, #google, #london, #amazon, #airport, #convenience, #ethics, #payment, #law, #controversy, #alibaba, #smatrphone, #securitycheck, #safety, #camera, #facialid, #antifacial, #school, #tech, #layer2").css("opacity",1);
    
    });
    
    $("#yellow").hover(function() {
    $("#yellow-, #red, #red-, #blue, #blue-").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#yellow-, #red, #red-, #blue, #blue-").css("opacity",1);
    
    });
    
    $("#yellow-").hover(function() {
    $("#yellow, #red, #red-, #blue, #blue-").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#yellow, #red, #red-, #blue, #blue-").css("opacity",1);
    
    });
    
    $("#red").hover(function() {
    $("#yellow, #yellow-, #red-, #blue, #blue-").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#yellow, #yellow-, #red-, #blue, #blue-").css("opacity",1);
    
    });
    
    $("#red-").hover(function() {
    $("#yellow, #yellow-, #red, #blue, #blue-").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#yellow, #yellow-, #red, #blue, #blue-").css("opacity",1);
    
    });
    
    $("#blue").hover(function() {
    $("#yellow, #yellow-, #red, #red-, #blue-").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#yellow, #yellow-, #red, #red-, #blue-").css("opacity",1);
    
    });
    
    $("#blue-").hover(function() {
    $("#yellow, #yellow-, #red, #red-, #blue").css("opacity",0.1);
        
        $(this).css("opacity",1);

    }, function(){
        $("#yellow, #yellow-, #red, #red-, #blue").css("opacity",1);
    
    });



});

  


    

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

