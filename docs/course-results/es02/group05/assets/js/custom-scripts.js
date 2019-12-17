/* zoom viz1 */ 

$(document).ready(function() {    
            $("#ZOOM").click(function() {
                $("#Alaska_x5F_US_x5F_HAARP").toggleClass("zoomimage");
                $("#Erguemin_1_").toggleClass("zoomimage");
                $("#Fort_Eben-Emael_2_").toggleClass("zoomimage");
                $("#West_Flanders_Office_2_").toggleClass("zoomimage");
                $("#South_x5F_Sandwich_x5F_island").toggleClass("zoomimage");
                $("#Former_House_of_Mandemakers_1_").toggleClass("zoomimage");
                $("#Dowództwo_x5F_Wojsk_x5F_Specjalnych_2_").toggleClass("zoomimage");
                $("#_x32__x5F_Polish_x5F_MilitaryHydrometeorological").toggleClass("zoomimage");
                $("#The_x5F_Faroe_x5F_Islands_1_").toggleClass("zoomimage");
                $("#Portlaoise_x5F_Prison_1_").toggleClass("zoomimage");
                $("#_x32__x5F_Unknownarea_x5F_Emporio_x5F_Santorini").toggleClass("zoomimage");
                $("#_x32__x5F_Unknownarea_x5F_theairportKos").toggleClass("zoomimage");
                $("#_x32__x5F_Andravida_x5F_Airbase").toggleClass("zoomimage");
                $("#_x32__x5F_AyioiAnargyroi_x5F_Military_x5F_Base").toggleClass("zoomimage");
                $("#_x32__x5F_Kephalonia_x5F_InternationalAirport_1_").toggleClass("zoomimage");
                $("#_x32__x5F_Thessaloniki_x5F_AirportMakedonia").toggleClass("zoomimage");
                $("#Chekov_x5F_city_1_").toggleClass("zoomimage");
                $("#_x32__x5F_MoriaCamp").toggleClass("zoomimage");
                $("#Jeannette_x5F_Island_1_").toggleClass("zoomimage");
                $("#Severnaya_x5F_Zemlya_1_").toggleClass("zoomimage");
                $("#TelAviv_1_").toggleClass("zoomimage");
                $("#Iraq_x5F_Babylon_x5F_razzaza_1_").toggleClass("zoomimage");
                $("#MapamYumco_1_").toggleClass("zoomimage");
                $("#North_x5F_Sentinel_x5F_Island_1_").toggleClass("zoomimage");
                $("#Afghanistan_x5F_camp_Shorabak_1_").toggleClass("zoomimage");
                $("#Japan_x5F_MinamiTorishimaAirport_1_").toggleClass("zoomimage");
                $("#AirForce_x5F_GeneralCommand").toggleClass("zoomimage");
                $("#Antarctica_1_").toggleClass("zoomimage");
                $("#FrenchPolynesia_x5F_Moruroa_1_").toggleClass("zoomimage");
                $("#Pakistan_x5F_Shamsi_Airfield_1_").toggleClass("zoomimage");
                $("#Cornell_x5F_University").toggleClass("zoomimage");
                $("#Area_x5F_51").toggleClass("zoomimage");
                $("#_x32_207_x5F_Seymour_x5F_Avenue_x5F_Cleveland").toggleClass("zoomimage");
                $("#Michael_x5F_Aaf_x5F_Building").toggleClass("zoomimage");
                $("#Camp_Buckner_Military_Academy_1_").toggleClass("zoomimage");
                $("#Theaberdeen_x5F_proving_x5F_ground").toggleClass("zoomimage");
                $("#Western_x5F_campeche_x5F_bank_1_").toggleClass("zoomimage");
                $("#_x32__x5F_Western_x5F_campeche_x5F_bank").toggleClass("zoomimage");
                $("#Canada_x5F_Baker_Lake").toggleClass("zoomimage");
                $("#Tantauco_x5F_National_x5F_Park_2_").toggleClass("zoomimage");
                $("#Patio_x5F_delos_x5F_Naranjos_1_").toggleClass("zoomimage");
                $("#Army_x5F_Command_x5F_Signals_2_").toggleClass("zoomimage");
                $("#Strategic_x5F_Signals_x5F_Regiment_x5F_number_x5F_22_2_").toggleClass("zoomimage");
                $("#Rosas_x5F_Air_x5F_Station_2_").toggleClass("zoomimage");
                $("#Missile_x5F_Silo_2_").toggleClass("zoomimage");
                $("#Malaga_x5F_Airport_2_").toggleClass("zoomimage");
                $("#AREVA_x5F_LaHague").toggleClass("zoomimage");
                $("#Prison_x5F_of_x5F_SaintQuentin_x5F_Fallavier").toggleClass("zoomimage");
                $("#Istres_x5F_LeTubé_x5F_AirBase").toggleClass("zoomimage");
                $("#Marcoule_x5F_NuclearSite").toggleClass("zoomimage");
                $("#Moronvilliers_2_").toggleClass("zoomimage");
                $("#OrangeCaritat__x5F_Air_x5F_Base").toggleClass("zoomimage");
                $("#Prison_x5F_of_x5F_Riom").toggleClass("zoomimage");
                $("#Toulon_x5F_arsenal").toggleClass("zoomimage");
                $("#Vélizy_x5F_VillacoublayAirBase").toggleClass("zoomimage");
                $("#Vauban_x5F_Fortifications_x5F_Saint_x5F_Martin_x5F_deRè").toggleClass("zoomimage");
                $("#Baumettes_x5F_Penitentiary").toggleClass("zoomimage");
                $("#Moronvilliers_1_").toggleClass("zoomimage");
                $("#Cherbourg_x5F_Naval_x5F_Base").toggleClass("zoomimage");
                $("#Cadarache_x5F_Center").toggleClass("zoomimage");
                $("#HWU_x5F_transmitter").toggleClass("zoomimage");
                $("#Vélizy_x5F_VillacoublayAirBase").toggleClass("zoomimage");
                $("#dam").toggleClass("zoomimage");
                
                $("#bottonezoom").toggleClass("cliccato");
                $("#bottonezoom").toggleClass("st3");
            });
});

$(document).ready(function() {    
            $("#dam").hover(function() {
                $("#_x32__x5F_Keowee_x5F_Dam").toggle($(this).hasClass("zoomimage"));
                d3.select("#_x32__x5F_Keowee_x5F_Dam").raise(); 
            }, function() {
                $("#_x32__x5F_Keowee_x5F_Dam").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#AREVA_x5F_LaHague").hover(function() {
                $("#_x32__x5F_AREVA_x5F_LaHague_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_AREVA_x5F_LaHague_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Prison_x5F_of_x5F_SaintQuentin_x5F_Fallavier").hover(function() {
                $("#_x32__x5F_Prison_x5F_of_x5F_SaintQuentin_x5F_Fallavier_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Prison_x5F_of_x5F_SaintQuentin_x5F_Fallavier_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Istres_x5F_LeTubé_x5F_AirBase").hover(function() {
                $("#_x32__x5F_Istres_x5F_LeTubé_x5F_AirBase_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Istres_x5F_LeTubé_x5F_AirBase_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Marcoule_x5F_NuclearSite").hover(function() {
                $("#_x32__x5F_Marcoule_x5F_NuclearSite_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Marcoule_x5F_NuclearSite_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Moronvilliers_2_").hover(function() {
                $("#_x32__x5F_Cornell_x5F_University_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Cornell_x5F_University_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#OrangeCaritat__x5F_Air_x5F_Base").hover(function() {
                $("#_x32__x5F_OrangeCaritat__x5F_Air_x5F_Base_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_OrangeCaritat__x5F_Air_x5F_Base_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Prison_x5F_of_x5F_Riom").hover(function() {
                $("#_x32__x5F_Prison_x5F_of_x5F_Riom_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Prison_x5F_of_x5F_Riom_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Toulon_x5F_arsenal").hover(function() {
                $("#_x32__x5F_Toulon_x5F_arsenal_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Toulon_x5F_arsenal_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Cherbourg_x5F_Naval_x5F_Base").hover(function() {
                $("#_x32__x5F_Cherbourg_x5F_Naval_x5F_Base_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Cherbourg_x5F_Naval_x5F_Base_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Vauban_x5F_Fortifications_x5F_Saint_x5F_Martin_x5F_deRè").hover(function() {
                $("#_x32__x5F_Vauban_x5F_Fortifications_x5F_Saint_x5F_Martin_x5F_deRè_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Vauban_x5F_Fortifications_x5F_Saint_x5F_Martin_x5F_deRè_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Baumettes_x5F_Penitentiary").hover(function() {
                $("#_x32__x5F_Baumettes_x5F_Penitentiary_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Baumettes_x5F_Penitentiary_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Moronvilliers_1_").hover(function() {
                $("#_x32__x5F_Moronvilliers_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Moronvilliers_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Cadarache_x5F_Center").hover(function() {
                $("#_x32__x5F_Cadarache_x5F_Center_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Cadarache_x5F_Center_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#HWU_x5F_transmitter").hover(function() {
                $("#_x32__x5F_HWU_x5F_transmitter_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_HWU_x5F_transmitter_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Vélizy_x5F_VillacoublayAirBase").hover(function() {
                $("#_x32__x5F_Vélizy_x5F_VillacoublayAirBase_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Vélizy_x5F_VillacoublayAirBase_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Cornell_x5F_University").hover(function() {
                $("#_x32__x5F_Cornell_x5F_University_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Cornell_x5F_University_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Area_x5F_51").hover(function() {
                $("#_x32__x5F_Area_x5F_51_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Area_x5F_51_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_207_x5F_Seymour_x5F_Avenue_x5F_Cleveland").hover(function() {
                $("#_x32__x5F_2207_x5F_Seymour_x5F_Avenue_x5F_Cleveland").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_2207_x5F_Seymour_x5F_Avenue_x5F_Cleveland").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Michael_x5F_Aaf_x5F_Building").hover(function() {
                $("#_x32__x5F_Michael_x5F_Aaf_x5F_Building_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Michael_x5F_Aaf_x5F_Building_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Camp_Buckner_Military_Academy_1_").hover(function() {
                $("#_x32__x5F_Camp_Buckner_Military_Academy_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Camp_Buckner_Military_Academy_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Theaberdeen_x5F_proving_x5F_ground").hover(function() {
                $("#_x32__x5F_Theaberdeen_x5F_proving_x5F_ground").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Theaberdeen_x5F_proving_x5F_ground").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Western_x5F_campeche_x5F_bank_1_").hover(function() {
                $("#_x32__x5F_Western_x5F_campeche_x5F_bank").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Western_x5F_campeche_x5F_bank").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Canada_x5F_Baker_Lake").hover(function() {
                $("#_x32__x5F_Canada_x5F_Baker_Lake_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Canada_x5F_Baker_Lake_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Tantauco_x5F_National_x5F_Park_2_").hover(function() {
                $("#_x32__x5F_Tantauco_x5F_National_x5F_Park_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Tantauco_x5F_National_x5F_Park_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Patio_x5F_delos_x5F_Naranjos_1_").hover(function() {
                $("#_x32__x5F_Patio_x5F_delos_x5F_Naranjos_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Patio_x5F_delos_x5F_Naranjos_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Army_x5F_Command_x5F_Signals_2_").hover(function() {
                $("#_x32__x5F_Army_x5F_Command_x5F_Signals_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Army_x5F_Command_x5F_Signals_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Strategic_x5F_Signals_x5F_Regiment_x5F_number_x5F_22_2_").hover(function() {
                $("#_x32__x5F_Strategic_x5F_Signals_x5F_Regiment_x5F_number_x5F_22_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Strategic_x5F_Signals_x5F_Regiment_x5F_number_x5F_22_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Rosas_x5F_Air_x5F_Station_2_").hover(function() {
                $("#_x32__x5F_Rosas_x5F_Air_x5F_Station_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Rosas_x5F_Air_x5F_Station_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Missile_x5F_Silo_2_").hover(function() {
                $("#_x32__x5F_Missile_x5F_Silo_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Missile_x5F_Silo_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Malaga_x5F_Airport_2_").hover(function() {
                $("#_x32__x5F_Malaga_x5F_Airport_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Malaga_x5F_Airport_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Alaska_x5F_US_x5F_HAARP").hover(function() {
                $("#Alaska_x5F_US_x5F_HAARP_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#Alaska_x5F_US_x5F_HAARP_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Fort_Eben-Emael_2_").hover(function() {
                $("#_x32__x5F_FortEben-Emael_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_FortEben-Emael_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#West_Flanders_Office_2_").hover(function() {
                $("#_x32__x5F_West_FlandersOffice_x5F_2").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_West_FlandersOffice_x5F_2").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Erguemin_1_").hover(function() {
                $("#_x32__x5F_Erguemin_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Erguemin_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#South_x5F_Sandwich_x5F_island").hover(function() {
                $("#_x32__x5F_South_x5F_Sandwich_x5F_island_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_South_x5F_Sandwich_x5F_island_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Former_House_of_Mandemakers_1_").hover(function() {
                $("#_x32__x5F_FormerHouseofMandemakers_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_FormerHouseofMandemakers_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Dowództwo_x5F_Wojsk_x5F_Specjalnych_2_").hover(function() {
                $("#_x32__x5F_Dowództwo_x5F_Wojsk_x5F_Specjalnych_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Dowództwo_x5F_Wojsk_x5F_Specjalnych_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32__x5F_Polish_x5F_MilitaryHydrometeorological").hover(function() {
                $("#_x32__x5F_Polish_x5F_MilitaryHydrometeorological_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Polish_x5F_MilitaryHydrometeorological_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#The_x5F_Faroe_x5F_Islands_1_").hover(function() {
                $("#The_x5F_Faroe_x5F_Islands_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#The_x5F_Faroe_x5F_Islands_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Portlaoise_x5F_Prison_1_").hover(function() {
                $("#_x32__x5F_Portlaoise_x5F_Prison").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Portlaoise_x5F_Prison").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32__x5F_Unknownarea_x5F_Emporio_x5F_Santorini").hover(function() {
                $("#_x32__x5F_Unknownarea_x5F_Emporio_x5F_Santorini_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Unknownarea_x5F_Emporio_x5F_Santorini_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32__x5F_Unknownarea_x5F_theairportKos").hover(function() {
                $("#_x32__x5F_Unknownarea_x5F_theairportKos_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Unknownarea_x5F_theairportKos_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32__x5F_Andravida_x5F_Airbase").hover(function() {
                $("#_x32__x5F_Andravida_x5F_Airbase_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Andravida_x5F_Airbase_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32__x5F_AyioiAnargyroi_x5F_Military_x5F_Base").hover(function() {
                $("#_x32__x5F_AyioiAnargyroi_x5F_Military_x5F_Base_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_AyioiAnargyroi_x5F_Military_x5F_Base_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32__x5F_Kephalonia_x5F_InternationalAirport_1_").hover(function() {
                $("#_x32__x5F_Kephalonia_x5F_InternationalAirport").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Kephalonia_x5F_InternationalAirport").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32__x5F_Thessaloniki_x5F_AirportMakedonia").hover(function() {
                $("#_x32__x5F_Thessaloniki_x5F_AirportMakedonia_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Thessaloniki_x5F_AirportMakedonia_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32__x5F_MoriaCamp").hover(function() {
                $("#_x32__x5F_MoriaCamp_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_MoriaCamp_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Chekov_x5F_city_1_").hover(function() {
                $("#_x32__x5F_Chekov_x5F_city_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Chekov_x5F_city_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Severnaya_x5F_Zemlya_1_").hover(function() {
                $("#_x32__x5F_Severnaya_x5F_Zemlya_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Severnaya_x5F_Zemlya_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Jeannette_x5F_Island_1_").hover(function() {
                $("#_x32__x5F_Jeannette_x5F_Island_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Jeannette_x5F_Island_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#TelAviv_1_").hover(function() {
                $("#_x32__x5F_TelAviv_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_TelAviv_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Iraq_x5F_Babylon_x5F_razzaza_1_").hover(function() {
                $("#_x32__x5F_Iraq_x5F_Babylon_x5F_razzaza_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Iraq_x5F_Babylon_x5F_razzaza_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MapamYumco_1_").hover(function() {
                $("#MapamYumco_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#MapamYumco_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#North_x5F_Sentinel_x5F_Island_1_").hover(function() {
                $("#_x32__x5F_North_x5F_Sentinel_x5F_Island_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_North_x5F_Sentinel_x5F_Island_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Pakistan_x5F_Shamsi_Airfield_1_").hover(function() {
                $("#Pakistan_x5F_Shamsi_Airfield_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#Pakistan_x5F_Shamsi_Airfield_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Afghanistan_x5F_camp_Shorabak_1_").hover(function() {
                $("#_x32__x5F_Afghanistan_x5F_camp_Shorabak_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Afghanistan_x5F_camp_Shorabak_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Japan_x5F_MinamiTorishimaAirport_1_").hover(function() {
                $("#_x32__x5F_Japan_x5F_MinamiTorishimaAirport_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_Japan_x5F_MinamiTorishimaAirport_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#AirForce_x5F_GeneralCommand").hover(function() {
                $("#_x32__x5F_AirForce_x5F_GeneralCommand_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#_x32__x5F_AirForce_x5F_GeneralCommand_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Antarctica_1_").hover(function() {
                $("#Antarctica_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#Antarctica_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FrenchPolynesia_x5F_Moruroa_1_").hover(function() {
                $("#FrenchPolynesia_x5F_Moruroa_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#FrenchPolynesia_x5F_Moruroa_x5F_grande").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#Pakistan_x5F_Shamsi_Airfield_1_").hover(function() {
                $("#Pakistan_x5F_Shamsi_Airfield_x5F_grande").toggle($(this).hasClass("zoomimage"));
            }, function() {
                $("#Pakistan_x5F_Shamsi_Airfield_x5F_grande").css("display", "none");
            });
});

/* stati viz1 */

$(document).ready(function() {    
            $("#Alaska").click(function() {
                $("#Nomi_x5F_Alaska").toggle();
            });
});

$(document).ready(function() {    
            $("#Antarctica").click(function() {
                $("#Nomi_x5F_Antarctica").toggle();
            });
});

$(document).ready(function() {    
            $("#Canada").click(function() {
                $("#Nomi_x5F_Alaska_1_").toggle();
            });
});

$(document).ready(function() {    
            $("#US_1_").click(function() {
                $("#Nomi_x5F_US").toggle();
            });
});

$(document).ready(function() {    
            $("#Ireland_1_").click(function() {
                $("#Nomi_x5F_Ireland").toggle();
            });
});


$(document).ready(function() {    
            $("#UK_x5F_Label").click(function() {
                $("#Nomi_x5F_Uk").toggle();
            });
});

$(document).ready(function() {    
            $("#Chile_1_").click(function() {
                $("#Nomi_x5F_Chile").toggle();
            });
});

$(document).ready(function() {    
            $("#Portugal_1_").click(function() {
                $("#Nomi_x5F_Portugal").toggle();
            });
});

$(document).ready(function() {    
            $("#Belgium_1_").click(function() {
                $("#Nomi_x5F_Belgium").toggle();
            });
});

$(document).ready(function() {    
            $("#Mexico_1_").click(function() {
                $("#Nomi_x5F_Mexico").toggle();
            });
});

$(document).ready(function() {    
            $("#France").click(function() {
                $("#Nomi_x5F_France").toggle();
            });
});

$(document).ready(function() {    
            $("#Netherlands").click(function() {
                $("#Nomi_x5F_Netherlands").toggle();
            });
});

$(document).ready(function() {    
            $("#Denmark").click(function() {
                $("#Nomi_x5F_Denmark").toggle();
            });
});

$(document).ready(function() {    
            $("#Germany_1_").click(function() {
                $("#Nomi_x5F_Germany").toggle();
            });
});

$(document).ready(function() {    
            $("#Sweden").click(function() {
                $("#Nomi_x5F_Sweden").toggle();
            });
});

$(document).ready(function() {    
            $("#Poland_1_").click(function() {
                $("#Nomi_x5F_Poland").toggle();
            });
});

$(document).ready(function() {    
            $("#Slovakia").click(function() {
                $("#Nomi_x5F_Slovakia").toggle();
            });
});

$(document).ready(function() {    
            $("#Hungary_1_").click(function() {
                $("#Nomi_x5F_Hungary").toggle();
            });
});

$(document).ready(function() {    
            $("#Russia_1_").click(function() {
                $("#Nomi_x5F_Russia").toggle();
            });
});

$(document).ready(function() {    
            $("#Nortkorea").click(function() {
                $("#Nomi_x5F_NortKorea").toggle();
            });
});

$(document).ready(function() {    
            $("#Japan").click(function() {
                $("#Nomi_x5F_Japan").toggle();
            });
});

$(document).ready(function() {    
            $("#spain").click(function() {
                $("#Spain_x5F_Nomi").toggle();
            });
});

$(document).ready(function() {    
            $("#greece").click(function() {
                $("#Greece_x5F_Nomi").toggle();
            });
});

$(document).ready(function() {    
            $("#israel").click(function() {
                $("#Israel_x5F_Nomi").toggle();
            });
});

$(document).ready(function() {    
            $("#iraq").click(function() {
                $("#Iraq_x5F_Nomi").toggle();
            });
});

$(document).ready(function() {    
            $("#phi").click(function() {
                $("#Philippines_x5F_Nom").toggle();
            });
});

$(document).ready(function() {    
            $("#af").click(function() {
                $("#Afghanistan").toggle();
            });
});

$(document).ready(function() {    
            $("#pak").click(function() {
                $("#Pakistan").toggle();
            });
});

$(document).ready(function() {    
            $("#india").click(function() {
                $("#India_x5F_Nomi").toggle();
            });
});

$(document).ready(function() {    
            $("#nepal").click(function() {
                $("#Nepal_x5F_Nomi").toggle();
            });
});

$(document).ready(function() {    
            $("#china").click(function() {
                $("#China_x5F_Nomi_1_").toggle();
            });
});

$(document).ready(function() {    
            $("#poly").click(function() {
                $("#French_Polynesia").toggle();
            });
});

$(document).ready(function() {    
            $("#Livello_113").click(function() {
                $("#Nomi_x5F_Taiwan").toggle();
            });
});

/* homepage */

$(document).ready(function(){
  $(".background1:odd").css("background-color", "#c8c8c8");
  $(".research__question:odd").css("background-color", "#c8c8c8");
});

/* magazine visualization */

$(document).ready(function() {    
            $("#_x30_1_x5F_Husler").hover(function() {
                $("#_x30_1_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Husler").hover(function() {
                $("#_x30_2_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Husler").hover(function() {
                $("#_x30_3_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Husler").hover(function() {
                $("#_x30_4_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Husler").hover(function() {
                $("#_x30_5_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Husler").hover(function() {
                $("#_x30_6_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Husler").hover(function() {
                $("#_x30_7_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Husler").hover(function() {
                $("#_x30_8_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Hustler").hover(function() {
                $("#_x30_9_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x30_9_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x30_9_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Husler").hover(function() {
                $("#_x31_0_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x31_0_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x31_0_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Husler").hover(function() {
                $("#_x31_1_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x31_1_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x31_1_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Hustler").hover(function() {
                $("#_x31_2_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_2_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_2_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Hustler").hover(function() {
                $("#_x31_3_x5F_Husler_x5F_f").css("display", "block");
                d3.select("#_x31_3_x5F_Husler_x5F_f").raise(); 
            }, function() {
                $("#_x31_3_x5F_Husler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Hustler").hover(function() {
                $("#_x31_4_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_4_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_4_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Hustler").hover(function() {
                $("#_x31_5_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_5_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_5_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Hustler").hover(function() {
                $("#_x31_6_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_6_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_6_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Hustler").hover(function() {
                $("#_x31_7_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_7_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_7_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_Hustler").hover(function() {
                $("#_x31_8_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_8_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_8_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_Hustler").hover(function() {
                $("#_x31_9_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_9_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_9_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_Hustler").hover(function() {
                $("#_x32_0_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_0_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_0_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_Hustler").hover(function() {
                $("#_x32_1_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_1_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_1_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_Hustler").hover(function() {
                $("#_x32_2_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_2_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_2_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_Hustler").hover(function() {
                $("#_x32_3_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_3_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_3_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_4_x5F_Hustler").hover(function() {
                $("#_x32_4_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_4_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_4_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_5_x5F_Hustler").hover(function() {
                $("#_x32_5_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_5_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_5_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_6_x5F_Hustler").hover(function() {
                $("#_x32_6_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_6_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_6_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_7_x5F_Hustler").hover(function() {
                $("#_x32_7_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_7_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_7_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_8_x5F_Hustler").hover(function() {
                $("#_x32_8_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_8_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_8_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_9_x5F_Hustler").hover(function() {
                $("#_x32_9_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x32_9_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x32_9_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_0_x5F_Hustler").hover(function() {
                $("#_x33_0_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_0_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_0_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_1_x5F_Hustler").hover(function() {
                $("#_x33_1_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_1_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_1_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_2_x5F_Hustler").hover(function() {
                $("#_x33_2_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_2_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_2_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_3_x5F_Hustler").hover(function() {
                $("#_x33_3_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_3_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_3_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_4_x5F_Hustler").hover(function() {
                $("#_x33_4_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_4_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_4_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_5_x5F_Hustler").hover(function() {
                $("#_x33_5_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_5_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_5_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_6_x5F_Hustler").hover(function() {
                $("#_x33_6_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_6_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_6_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_7_x5F_Hustler").hover(function() {
                $("#_x33_7_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_7_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_7_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_8_x5F_Hustler").hover(function() {
                $("#_x33_8_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_8_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_8_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_9_x5F_Hustler").hover(function() {
                $("#_x33_9_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x33_9_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x33_9_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_0_x5F_Hustler").hover(function() {
                $("#_x34_0_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_0_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_0_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_1_x5F_Hustler").hover(function() {
                $("#_x34_1_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_1_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_1_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_2_x5F_Hustler").hover(function() {
                $("#_x34_2_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_2_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_2_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_3_x5F_Hustler").hover(function() {
                $("#_x34_3_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_3_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_3_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_4_x5F_Hustler").hover(function() {
                $("#_x34_4_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_4_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_4_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_5_x5F_Hustler").hover(function() {
                $("#_x34_5_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_5_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_5_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_6_x5F_Hustler").hover(function() {
                $("#_x34_6_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_6_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_6_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_7_x5F_Hustler").hover(function() {
                $("#_x34_7_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_7_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_7_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_8_x5F_Hustler").hover(function() {
                $("#_x34_8_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_8_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_8_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_9_x5F_Hustler").hover(function() {
                $("#_x34_9_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x34_9_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x34_9_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_0_x5F_Hustler").hover(function() {
                $("#_x35_0_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_0_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_0_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_1_x5F_Hustler").hover(function() {
                $("#_x35_1_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_1_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_1_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_2_x5F_Hustler").hover(function() {
                $("#_x35_2_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_2_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_2_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_3_x5F_Hustler").hover(function() {
                $("#_x35_3_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_3_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_3_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_4_x5F_Hustler").hover(function() {
                $("#_x35_4_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_4_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_4_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_5_x5F_Hustler").hover(function() {
                $("#_x35_5_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_5_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_5_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_6_x5F_Hustler").hover(function() {
                $("#_x35_6_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_6_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_6_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_7_x5F_Hustler").hover(function() {
                $("#_x35_7_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_7_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_7_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_8_x5F_Hustler").hover(function() {
                $("#_x35_8_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_8_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_8_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_9_x5F_Hustler").hover(function() {
                $("#_x35_9_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x35_9_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x35_9_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_0_x5F_Hustler").hover(function() {
                $("#_x36_0_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_0_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_0_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_1_x5F_Hustler").hover(function() {
                $("#_x36_1_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_1_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_1_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_2_x5F_Hustler").hover(function() {
                $("#_x36_2_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_2_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_2_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_3_x5F_Hustler").hover(function() {
                $("#_x36_3_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_3_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_3_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_4_x5F_Hustler").hover(function() {
                $("#_x36_4_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_4_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_4_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_5_x5F_Hustler").hover(function() {
                $("#_x36_5_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_5_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_5_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_6_x5F_Hustler").hover(function() {
                $("#_x36_6_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_6_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_6_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_7_x5F_Hustler").hover(function() {
                $("#_x36_7_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_7_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_7_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_8_x5F_Hustler").hover(function() {
                $("#_x36_8_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_8_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_8_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_9_x5F_Hustler").hover(function() {
                $("#_x36_9_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x36_9_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x36_9_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_0_x5F_Hustler").hover(function() {
                $("#_x37_0_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_0_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_0_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_1_x5F_Hustler").hover(function() {
                $("#_x37_1_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_1_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_1_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_2_x5F_Hustler").hover(function() {
                $("#_x37_2_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_2_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_2_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_3_x5F_Hustler").hover(function() {
                $("#_x37_3_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_3_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_3_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_4_x5F_Hustler").hover(function() {
                $("#_x37_4_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_4_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_4_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_5_x5F_Hustler").hover(function() {
                $("#_x37_5_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_5_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_5_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_6_x5F_Hustler").hover(function() {
                $("#_x37_6_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_6_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_6_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_7_x5F_Hustler").hover(function() {
                $("#_x37_7_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_7_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_7_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_8_x5F_Hustler").hover(function() {
                $("#_x37_8_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_8_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_8_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_9_x5F_Hustler").hover(function() {
                $("#_x37_9_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x37_9_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x37_9_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_0_x5F_Hustler").hover(function() {
                $("#_x38_0_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_0_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_0_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_1_x5F_Hustler").hover(function() {
                $("#_x38_1_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_1_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_1_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_2_x5F_Hustler").hover(function() {
                $("#_x38_2_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_2_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_2_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_3_x5F_Hustler").hover(function() {
                $("#_x38_3_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_3_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_3_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_4_x5F_Hustler").hover(function() {
                $("#_x38_4_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_4_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_4_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_5_x5F_Hustler").hover(function() {
                $("#_x38_5_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_5_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_5_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_6_x5F_Hustler").hover(function() {
                $("#_x38_6_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_6_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_6_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_7_x5F_Hustler").hover(function() {
                $("#_x38_7_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_7_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_7_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_8_x5F_Hustler").hover(function() {
                $("#_x38_8_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_8_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_8_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_9_x5F_Hustler").hover(function() {
                $("#_x38_9_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x38_9_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x38_9_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_0_x5F_Hustler").hover(function() {
                $("#_x39_0_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_0_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_0_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_1_x5F_Hustler").hover(function() {
                $("#_x39_1_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_1_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_1_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_2_x5F_Hustler").hover(function() {
                $("#_x39_2_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_2_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_2_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_3_x5F_Hustler").hover(function() {
                $("#_x39_3_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_3_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_3_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_4_x5F_Hustler").hover(function() {
                $("#_x39_4_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_4_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_4_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_5_x5F_Hustler").hover(function() {
                $("#_x39_5_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_5_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_5_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_6_x5F_Hustler").hover(function() {
                $("#_x39_6_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_6_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_6_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_7_x5F_Hustler").hover(function() {
                $("#_x39_7_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_7_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_7_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_8_x5F_Hustler").hover(function() {
                $("#_x39_8_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_8_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_8_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_9_x5F_Hustler").hover(function() {
                $("#_x39_9_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x39_9_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x39_9_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_00_x5F_Hustler").hover(function() {
                $("#_x31_00_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_00_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_00_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_01_x5F_Hustler").hover(function() {
                $("#_x31_01_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_01_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_01_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_02_x5F_Hustler").hover(function() {
                $("#_x31_02_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_02_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_02_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_03_x5F_Hustler").hover(function() {
                $("#_x31_03_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_03_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_03_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_04_x5F_Hustler").hover(function() {
                $("#_x31_04_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_04_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_04_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_05_x5F_Hustler").hover(function() {
                $("#_x31_05_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_05_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_05_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_06_x5F_Hustler").hover(function() {
                $("#_x31_06_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_06_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_06_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_07_x5F_Hustler").hover(function() {
                $("#_x31_07_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_07_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_07_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_08_x5F_Hustler").hover(function() {
                $("#_x31_08_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_08_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_08_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_09_x5F_Hustler").hover(function() {
                $("#_x31_09_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_09_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_09_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_10_x5F_Hustler").hover(function() {
                $("#_x31_10_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_10_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_10_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_11_x5F_Hustler").hover(function() {
                $("#_x31_11_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_11_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_11_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_12_x5F_Hustler").hover(function() {
                $("#_x31_12_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_12_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_12_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_13_x5F_Hustler").hover(function() {
                $("#_x31_13_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_13_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_13_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_14_x5F_Hustler").hover(function() {
                $("#_x31_14_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_14_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_14_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_15_x5F_Hustler").hover(function() {
                $("#_x31_15_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_15_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_15_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_16_x5F_Hustler").hover(function() {
                $("#_x31_16_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_16_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_16_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_17_x5F_Hustler").hover(function() {
                $("#_x31_17_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_17_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_17_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_18_x5F_Hustler").hover(function() {
                $("#_x31_18_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_18_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_18_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_19_x5F_Hustler").hover(function() {
                $("#_x31_19_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_19_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_19_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_20_x5F_Hustler").hover(function() {
                $("#_x31_20_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_20_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_20_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_21_x5F_Hustler").hover(function() {
                $("#_x31_21_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_21_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_21_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_22_x5F_Hustler").hover(function() {
                $("#_x31_22_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_22_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_22_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_23_x5F_Hustler").hover(function() {
                $("#_x31_23_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_23_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_23_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_24_x5F_Hustler").hover(function() {
                $("#_x31_24_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_24_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_24_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_25_x5F_Hustler").hover(function() {
                $("#_x31_25_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_25_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_25_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_26_x5F_Hustler").hover(function() {
                $("#_x31_26_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_26_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_26_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_27_x5F_Hustler").hover(function() {
                $("#_x31_27_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_27_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_27_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_28_x5F_Hustler").hover(function() {
                $("#_x31_28_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_28_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_28_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_29_x5F_Hustler").hover(function() {
                $("#_x31_29_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_29_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_29_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_30_x5F_Hustler").hover(function() {
                $("#_x31_30_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_30_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_30_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_31_x5F_Hustler").hover(function() {
                $("#_x31_31_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_31_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_31_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_32_x5F_Hustler").hover(function() {
                $("#_x31_32_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_32_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_32_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_33_x5F_Hustler").hover(function() {
                $("#_x31_33_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_33_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_33_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_34_x5F_Hustler").hover(function() {
                $("#_x31_34_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_34_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_34_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_35_x5F_Hustler").hover(function() {
                $("#_x31_35_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_35_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_35_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_36_x5F_Hustler").hover(function() {
                $("#_x31_36_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_36_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_36_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_37_x5F_Hustler").hover(function() {
                $("#_x31_37_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_37_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_37_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_38_x5F_Hustler").hover(function() {
                $("#_x31_38_x5F_Hustler_x5F_f").css("display", "block");
                d3.select("#_x31_38_x5F_Hustler_x5F_f").raise(); 
            }, function() {
                $("#_x31_38_x5F_Hustler_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Normal").hover(function() {
                $("#_x30_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Normal").hover(function() {
                $("#_x30_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Normal").hover(function() {
                $("#_x30_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Normal").hover(function() {
                $("#_x30_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Normal").hover(function() {
                $("#_x30_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Normal").hover(function() {
                $("#_x30_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Normal").hover(function() {
                $("#_x30_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Normal").hover(function() {
                $("#_x30_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Normal").hover(function() {
                $("#_x30_9_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x30_9_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x30_9_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Normal").hover(function() {
                $("#_x31_0_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_0_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_0_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Normal").hover(function() {
                $("#_x31_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Normal").hover(function() {
                $("#_x31_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Normal").hover(function() {
                $("#_x31_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Normal").hover(function() {
                $("#_x31_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Normal").hover(function() {
                $("#_x31_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Normal").hover(function() {
                $("#_x31_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Normal").hover(function() {
                $("#_x31_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_Normal").hover(function() {
                $("#_x31_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_Normal").hover(function() {
                $("#_x31_9_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_9_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_9_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_Normal").hover(function() {
                $("#_x32_0_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_0_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_0_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_Normal").hover(function() {
                $("#_x32_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_Normal").hover(function() {
                $("#_x32_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_Normal").hover(function() {
                $("#_x32_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_4_x5F_Normal").hover(function() {
                $("#_x32_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_5_x5F_Normal").hover(function() {
                $("#_x32_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_6_x5F_Normal").hover(function() {
                $("#_x32_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_7_x5F_Normal").hover(function() {
                $("#_x32_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_8_x5F_Normal").hover(function() {
                $("#_x32_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_9_x5F_Normal").hover(function() {
                $("#_x32_9_x5F__x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x32_9_x5F__x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x32_9_x5F__x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_0_x5F_Normal").hover(function() {
                $("#_x33_0_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_0_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_0_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_1_x5F_Normal").hover(function() {
                $("#_x33_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_2_x5F_Normal").hover(function() {
                $("#_x33_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_3_x5F_Normal").hover(function() {
                $("#_x33_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_4_x5F_Normal").hover(function() {
                $("#_x33_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_5_x5F_Normal").hover(function() {
                $("#_x33_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_6_x5F_Normal").hover(function() {
                $("#_x33_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_7_x5F_Normal").hover(function() {
                $("#_x33_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_8_x5F_Normal").hover(function() {
                $("#_x33_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_9_x5F_Normal").hover(function() {
                $("#_x33_9_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x33_9_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x33_9_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_0_x5F_Normal").hover(function() {
                $("#_x34_0_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_0_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_0_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_1_x5F_Normal").hover(function() {
                $("#_x34_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_2_x5F_Normal").hover(function() {
                $("#_x34_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_3_x5F_Normal").hover(function() {
                $("#_x34_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_4_x5F_Normal").hover(function() {
                $("#_x34_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_5_x5F_Normal").hover(function() {
                $("#_x34_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_6_x5F_Normal").hover(function() {
                $("#_x34_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_7_x5F_Normal").hover(function() {
                $("#_x34_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_8_x5F_Normal").hover(function() {
                $("#_x34_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_9_x5F_Normal").hover(function() {
                $("#_x34_9_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x34_9_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x34_9_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_0_x5F_Normal").hover(function() {
                $("#_x35_0_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_0_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_0_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_1_x5F_Normal").hover(function() {
                $("#_x35_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_2_x5F_Normal").hover(function() {
                $("#_x35_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_3_x5F_Normal").hover(function() {
                $("#_x35_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_4_x5F_Normal").hover(function() {
                $("#_x35_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_5_x5F_Normal").hover(function() {
                $("#_x35_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_6_x5F_Normal").hover(function() {
                $("#_x35_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_7_x5F_Normal").hover(function() {
                $("#_x35_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_8_x5F_Normal").hover(function() {
                $("#_x35_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_9_x5F_Normal").hover(function() {
                $("#_x35_9_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x35_9_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x35_9_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_0_x5F_Normal").hover(function() {
                $("#_x36_0_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_0_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_0_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_1_x5F_Normal").hover(function() {
                $("#_x36_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_2_x5F_Normal").hover(function() {
                $("#_x36_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_3_x5F_Normal").hover(function() {
                $("#_x36_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_4_x5F_Normal").hover(function() {
                $("#_x36_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_5_x5F_Normal").hover(function() {
                $("#_x36_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_6_x5F_Normal").hover(function() {
                $("#_x36_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_7_x5F_Normal").hover(function() {
                $("#_x36_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_8_x5F_Normal").hover(function() {
                $("#_x36_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x36_9_x5F_Normal").hover(function() {
                $("#_x36_9_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x36_9_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x36_9_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_0_x5F_Normal").hover(function() {
                $("#_x37_0_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_0_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_0_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_1_x5F_Normal").hover(function() {
                $("#_x37_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_2_x5F_Normal").hover(function() {
                $("#_x37_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_3_x5F_Normal").hover(function() {
                $("#_x37_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_4_x5F_Normal").hover(function() {
                $("#_x37_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_5_x5F_Normal").hover(function() {
                $("#_x37_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_6_x5F_Normal").hover(function() {
                $("#_x37_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_7_x5F_Normal").hover(function() {
                $("#_x37_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_8_x5F_Normal").hover(function() {
                $("#_x37_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x37_9_x5F_Normal").hover(function() {
                $("#_x37_9_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x37_9_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x37_9_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_0_x5F_Normal").hover(function() {
                $("#_x38_0_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_0_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_0_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_1_x5F_Normal").hover(function() {
                $("#_x38_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_2_x5F_Normal").hover(function() {
                $("#_x38_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_3_x5F_Normal").hover(function() {
                $("#_x38_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_4_x5F_Normal").hover(function() {
                $("#_x38_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_5_x5F_Normal").hover(function() {
                $("#_x38_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_6_x5F_Normal").hover(function() {
                $("#_x38_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_7_x5F_Normal").hover(function() {
                $("#_x38_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_8_x5F_Normal").hover(function() {
                $("#_x38_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x38_9_x5F_Normal").hover(function() {
                $("#_x38_9_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x38_9_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x38_9_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_0_x5F_Normal").hover(function() {
                $("#_x39_0_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_0_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_0_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_1_x5F_Normal").hover(function() {
                $("#_x39_1_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_1_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_1_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_2_x5F_Normal").hover(function() {
                $("#_x39_2_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_2_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_2_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_3_x5F_Normal").hover(function() {
                $("#_x39_3_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_3_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_3_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_4_x5F_Normal").hover(function() {
                $("#_x39_4_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_4_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_4_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_5_x5F_Normal").hover(function() {
                $("#_x39_5_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_5_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_5_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_6_x5F_Normal").hover(function() {
                $("#_x39_6_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_6_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_6_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_7_x5F_Normal").hover(function() {
                $("#_x39_7_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_7_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_7_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_8_x5F_Normal").hover(function() {
                $("#_x39_8_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_8_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_8_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x39_9_x5F_Normal").hover(function() {
                $("#_x39_9_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x39_9_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x39_9_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_00_x5F_Normal").hover(function() {
                $("#_x31_00_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_00_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_00_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_01_x5F_Normal").hover(function() {
                $("#_x31_01_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_01_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_01_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_02_x5F_Normal").hover(function() {
                $("#_x31_02_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_02_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_02_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_03_x5F_Normal").hover(function() {
                $("#_x31_03_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_03_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_03_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_04_x5F_Normal").hover(function() {
                $("#_x31_04_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_04_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_04_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_05_x5F_Normal").hover(function() {
                $("#_x31_05_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_05_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_05_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_06_x5F_Normal").hover(function() {
                $("#_x31_06_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_06_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_06_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_07_x5F_Normal").hover(function() {
                $("#_x31_07_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_07_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_07_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_08_x5F_Normal").hover(function() {
                $("#_x31_08_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_08_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_08_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_09_x5F_Normal").hover(function() {
                $("#_x31_09_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_09_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_09_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_10_x5F_Normal").hover(function() {
                $("#_x31_10_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_10_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_10_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_11_x5F_Normal").hover(function() {
                $("#_x31_11_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_11_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_11_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_12_x5F_Normal").hover(function() {
                $("#_x31_12_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_12_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_12_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_13_x5F_Normal").hover(function() {
                $("#_x31_13_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_13_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_13_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_14_x5F_Normal").hover(function() {
                $("#_x31_14_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_14_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_14_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_15_x5F_Normal").hover(function() {
                $("#_x31_15_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_15_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_15_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_16_x5F_Normal").hover(function() {
                $("#_x31_16_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_16_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_16_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_17_x5F_Normal").hover(function() {
                $("#_x31_17_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_17_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_17_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_18_x5F_Normal").hover(function() {
                $("#_x31_18_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_18_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_18_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_19_x5F_Normal").hover(function() {
                $("#_x31_19_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_19_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_19_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_20_x5F_Normal").hover(function() {
                $("#_x31_20_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_20_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_20_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_21_x5F_Normal").hover(function() {
                $("#_x31_21_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_21_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_21_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_22_x5F_Normal").hover(function() {
                $("#_x31_22_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_22_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_22_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_23_x5F_Normal").hover(function() {
                $("#_x31_23_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_23_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_23_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_24_x5F_Normal").hover(function() {
                $("#_x31_24_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_24_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_24_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_25_x5F_Normal").hover(function() {
                $("#_x31_25_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_25_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_25_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_26_x5F_Normal").hover(function() {
                $("#_x31_26_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_26_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_26_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_27_x5F_Normal").hover(function() {
                $("#_x31_27_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_27_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_27_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_28_x5F_Normal").hover(function() {
                $("#_x31_28_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_28_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_28_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_29_x5F_Normal").hover(function() {
                $("#_x31_29_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_29_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_29_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_30_x5F_Normal").hover(function() {
                $("#_x31_30_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_30_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_30_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_31_x5F_Normal").hover(function() {
                $("#_x31_31_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_31_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_31_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_31_x5F_Normal").hover(function() {
                $("#_x31_32_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_32_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_32_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_33_x5F_Normal").hover(function() {
                $("#_x31_33_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_33_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_33_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_34_x5F_Normal").hover(function() {
                $("#_x31_34_x5F_Normal_x5F_f").css("display", "block");
                d3.select("#_x31_34_x5F_Normal_x5F_f").raise(); 
            }, function() {
                $("#_x31_34_x5F_Normal_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Playboy").hover(function() {
                $("#_x30_1_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x30_2_x5F_Playboy").hover(function() {
                $("#_x30_2_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Playboy").hover(function() {
                $("#_x30_3_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Playboy_1_").hover(function() {
                $("#_x30_4_x5F_Playboy").css("display", "block");
                d3.select("#_x30_4_x5F_Playboy").raise(); 
            }, function() {
                $("#_x30_4_x5F_Playboy").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Playboy").hover(function() {
                $("#_x30_5_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Playboy").hover(function() {
                $("#_x30_6_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Playboy_1_").hover(function() {
                $("#_x30_7_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Playboy").hover(function() {
                $("#_x30_8_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Playboy").hover(function() {
                $("#_x30_9_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Playboy").hover(function() {
                $("#_x31_0_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Playboy").hover(function() {
                $("#_x31_1_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Playboy").hover(function() {
                $("#_x31_2_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Playboy").hover(function() {
                $("#_x31_3_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Playboy").hover(function() {
                $("#_x31_4_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Playboy").hover(function() {
                $("#_x31_5_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Playboy").hover(function() {
                $("#_x31_6_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_6_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_6_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Playboy").hover(function() {
                $("#_x31_7_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_7_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_7_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_Playboy").hover(function() {
                $("#_x31_8_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_8_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_8_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_Playboy").hover(function() {
                $("#_x31_9_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x31_9_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x31_9_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_Playboy").hover(function() {
                $("#_x32_0_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_0_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_0_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_Playboy").hover(function() {
                $("#_x32_1_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_1_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_1_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_Playboy").hover(function() {
                $("#_x32_2_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_2_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_2_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_Playboy").hover(function() {
                $("#_x32_3_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_3_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_3_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_4_x5F_Playboy").hover(function() {
                $("#_x32_4_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_4_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_4_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_5_x5F_Playboy").hover(function() {
                $("#_x32_5_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_5_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_5_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_6_x5F_Playboy").hover(function() {
                $("#_x32_6_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_6_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_6_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_7_x5F_Playboy").hover(function() {
                $("#_x32_7_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_7_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_7_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_8_x5F_Playboy").hover(function() {
                $("#_x32_8_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_8_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_8_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_9_x5F_Playboy").hover(function() {
                $("#_x32_9_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x32_9_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x32_9_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_0_x5F_Playboy").hover(function() {
                $("#_x33_0_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_0_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_0_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x33_1_x5F_Playboy").hover(function() {
                $("#_x33_1_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_1_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_1_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x33_2_x5F_Playboy").hover(function() {
                $("#_x33_2_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_2_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_2_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x33_3_x5F_Playboy").hover(function() {
                $("#_x33_3_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_3_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_3_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x33_4_x5F_Playboy").hover(function() {
                $("#_x33_4_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_4_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_4_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x33_5_x5F_Playboy").hover(function() {
                $("#_x33_5_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_5_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_5_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x33_6_x5F_Playboy").hover(function() {
                $("#_x33_6_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_6_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_6_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x33_7_x5F_Playboy").hover(function() {
                $("#_x33_7_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_7_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_7_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x33_8_x5F_Playboy").hover(function() {
                $("#_x33_8_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_8_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_8_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x33_9_x5F_Playboy").hover(function() {
                $("#_x33_9_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x33_9_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x33_9_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x34_0_x5F_Playboy").hover(function() {
                $("#_x34_0_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x34_0_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_0_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_1_x5F_Playboy").hover(function() {
                $("#_x34_1_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x34_1_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_1_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_2_x5F_Playboy").hover(function() {
                $("#_x34_2_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x34_2_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_2_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_3_x5F_Playboy").hover(function() {
                $("#_x34_3_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x34_3_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_3_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_4_x5F_Playboy").hover(function() {
                $("#_x34_4_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x34_4_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_4_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_5_x5F_Playboy").hover(function() {
                $("#_x34_5_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x34_5_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_5_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_6_x5F_Playboy").hover(function() {
                $("#_x34_6_x5F_playboy_x5F_F").css("display", "block");
                d3.select("#_x34_6_x5F_playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_6_x5F_playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_7_x5F_Playboy").hover(function() {
                $("#_x34_7_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x34_7_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_7_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_8_x5F_Playboy").hover(function() {
                $("#_x34_8_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x34_8_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_8_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_9_x5F_Playboy").hover(function() {
                $("#_x34_9_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x34_9_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x34_9_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_0_x5F_Playboy").hover(function() {
                $("#_x35_0_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x35_0_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x35_0_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_1_x5F_Playboy").hover(function() {
                $("#_x35_1_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x35_1_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x35_1_x5F_Playboy_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x35_2_x5F_Playboy").hover(function() {
                $("#_x35_2_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x35_2_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x35_2_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_3_x5F_Playboy").hover(function() {
                $("#_x35_3_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x35_3_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x35_3_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_4_x5F_Playboy").hover(function() {
                $("#_x35_4_x5F_Playboy_x5F_F").css("display", "block");
                d3.select("#_x35_4_x5F_Playboy_x5F_F").raise(); 
            }, function() {
                $("#_x35_4_x5F_Playboy_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Playboy_SWE").hover(function() {
                $("#_x30_1_x5F_PlayboySWE_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_PlayboySWE_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_PlayboySWE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_PlayboySWE").hover(function() {
                $("#_x30_2_x5F_PlayboySWE_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_PlayboySWE_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_PlayboySWE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_PlayboySWE").hover(function() {
                $("#_x30_3_x5F_PlayboySWE_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_PlayboySWE_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_PlayboySWE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_PlayboySWE").hover(function() {
                $("#_x30_4_x5F_PlayboySWE_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_PlayboySWE_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_PlayboySWE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_PlayboySWE").hover(function() {
                $("#_x30_5_x5F_Playboy_x5F_SWE_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Playboy_x5F_SWE_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Playboy_x5F_SWE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Lui").hover(function() {
                $("#_x30_1_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Lui").hover(function() {
                $("#_x30_2_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Lui").hover(function() {
                $("#_x30_3_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Lui").hover(function() {
                $("#_x30_4_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Lui").hover(function() {
                $("#_x30_5_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Lui").hover(function() {
                $("#_x30_6_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Lui").hover(function() {
                $("#_x30_7_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Lui").hover(function() {
                $("#_x30_8_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Lui").hover(function() {
                $("#_x30_9_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Lui").hover(function() {
                $("#_x31_0_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Lui").hover(function() {
                $("#_x31_1_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Lui").hover(function() {
                $("#_x31_2_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Lui").hover(function() {
                $("#_x31_3_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Lui").hover(function() {
                $("#_x31_4_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Lui").hover(function() {
                $("#_x31_5_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Lui").hover(function() {
                $("#_x31_6_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_6_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_6_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Lui").hover(function() {
                $("#_x31_7_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_7_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_7_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_Lui").hover(function() {
                $("#_x31_8_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_8_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_8_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_Lui").hover(function() {
                $("#_x31_9_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x31_9_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x31_9_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_Lui").hover(function() {
                $("#_x32_0_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_0_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_0_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_Lui").hover(function() {
                $("#_x32_1_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_1_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_1_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_Lui").hover(function() {
                $("#_x32_2_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_2_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_2_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_Lui").hover(function() {
                $("#_x32_3_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_3_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_3_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_4_x5F_Lui").hover(function() {
                $("#_x32_4_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_4_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_4_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_5_x5F_Lui").hover(function() {
                $("#_x32_5_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_5_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_5_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_6_x5F_Lui").hover(function() {
                $("#_x32_6_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_6_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_6_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_7_x5F_Lui").hover(function() {
                $("#_x32_7_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_7_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_7_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_8_x5F_Lui").hover(function() {
                $("#_x32_8_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_8_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_8_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_9_x5F_Lui").hover(function() {
                $("#_x32_9_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x32_9_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x32_9_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_0_x5F_Lui").hover(function() {
                $("#_x33_0_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_0_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_0_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_1_x5F_Lui").hover(function() {
                $("#_x33_1_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_1_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_1_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_2_x5F_Lui").hover(function() {
                $("#_x33_2_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_2_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_2_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_3_x5F_Lui").hover(function() {
                $("#_x33_3_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_3_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_3_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_4_x5F_Lui").hover(function() {
                $("#_x33_4_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_4_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_4_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_5_x5F_Lui").hover(function() {
                $("#_x33_5_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_5_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_5_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_6_x5F_Lui").hover(function() {
                $("#_x33_6_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_6_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_6_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_7_x5F_Lui").hover(function() {
                $("#_x33_7_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_7_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_7_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_8_x5F_Lui").hover(function() {
                $("#_x33_8_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_8_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_8_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_9_x5F_Lui").hover(function() {
                $("#_x33_9_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x33_9_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x33_9_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_0_x5F_Lui").hover(function() {
                $("#_x34_0_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_0_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_0_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_1_x5F_Lui").hover(function() {
                $("#_x34_1_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_1_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_1_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_2_x5F_Lui").hover(function() {
                $("#_x34_2_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_2_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_2_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_3_x5F_Lui").hover(function() {
                $("#_x34_3_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_3_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_3_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_4_x5F_Lui").hover(function() {
                $("#_x34_4_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_4_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_4_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_5_x5F_Lui").hover(function() {
                $("#_x34_5_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_5_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_5_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_6_x5F_Lui").hover(function() {
                $("#_x34_6_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_6_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_6_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_7_x5F_Lui").hover(function() {
                $("#_x34_7_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_7_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_7_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_8_x5F_Lui").hover(function() {
                $("#_x34_8_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_8_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_8_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_9_x5F_Lui").hover(function() {
                $("#_x34_9_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x34_9_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x34_9_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_0_x5F_Lui").hover(function() {
                $("#_x35_0_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_0_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_0_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_1_x5F_Lui").hover(function() {
                $("#_x35_1_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_1_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_1_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_2_x5F_Lui").hover(function() {
                $("#_x35_2_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_2_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_2_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_3_x5F_Lui").hover(function() {
                $("#_x35_3_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_3_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_3_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_4_x5F_Lui").hover(function() {
                $("#_x35_4_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_4_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_4_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_5_x5F_Lui").hover(function() {
                $("#_x35_5_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_5_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_5_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_6_x5F_Lui").hover(function() {
                $("#_x35_6_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_6_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_6_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_7_x5F_Lui").hover(function() {
                $("#_x35_7_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_7_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_7_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_8_x5F_Lui").hover(function() {
                $("#_x35_8_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_8_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_8_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x35_9_x5F_Lui").hover(function() {
                $("#_x35_9_x5F_Lui_x5F_F").css("display", "block");
                d3.select("#_x35_9_x5F_Lui_x5F_F").raise(); 
            }, function() {
                $("#_x35_9_x5F_Lui_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Nakd").hover(function() {
                $("#_x30_1_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Nakd").hover(function() {
                $("#_x30_2_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Nakd").hover(function() {
                $("#_x30_3_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Nakd").hover(function() {
                $("#_x30_4_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Nakd").hover(function() {
                $("#_x30_5_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Nakd").hover(function() {
                $("#_x30_6_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Nakd").hover(function() {
                $("#_x30_7_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Nakd").hover(function() {
                $("#_x30_8_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Nakd").hover(function() {
                $("#_x30_9_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Nakd").hover(function() {
                $("#_x31_0_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Nakd").hover(function() {
                $("#_x31_1_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Nakd").hover(function() {
                $("#_x31_2_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Nakd").hover(function() {
                $("#_x31_3_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Nakd").hover(function() {
                $("#_x31_4_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Nakd").hover(function() {
                $("#_x31_5_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Nakd").hover(function() {
                $("#_x31_6_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_6_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_6_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Nakd").hover(function() {
                $("#_x31_7_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_7_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_7_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_Nakd").hover(function() {
                $("#_x31_8_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_8_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_8_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_Nakd").hover(function() {
                $("#_x31_9_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x31_9_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x31_9_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_Nakd").hover(function() {
                $("#_x32_0_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_0_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_0_x5F_Nakd_x5F_F").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x32_1_x5F_Nakd").hover(function() {
                $("#_x32_1_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_1_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_1_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_Nakd").hover(function() {
                $("#_x32_2_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_2_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_2_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_Nakd").hover(function() {
                $("#_x32_3_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_3_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_3_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_4_x5F_Nakd").hover(function() {
                $("#_x32_4_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_4_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_4_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_5_x5F_Nakd").hover(function() {
                $("#_x32_5_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_5_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_5_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_6_x5F_Nakd").hover(function() {
                $("#_x32_6_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_6_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_6_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_7_x5F_Nakd").hover(function() {
                $("#_x32_7_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_7_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_7_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_8_x5F_Nakd").hover(function() {
                $("#_x32_8_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_8_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_8_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_9_x5F_Nakd").hover(function() {
                $("#_x32_9_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x32_9_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x32_9_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_0_x5F_Nakd").hover(function() {
                $("#_x33_0_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x33_0_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x33_0_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_1_x5F_Nakd").hover(function() {
                $("#_x33_1_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x33_1_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x33_1_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_2_x5F_Nakd").hover(function() {
                $("#_x33_2_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x33_2_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x33_2_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_3_x5F_Nakd").hover(function() {
                $("#_x33_3_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x33_3_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x33_3_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_4_x5F_Nakd").hover(function() {
                $("#_x33_4_x5F_Nakd_x5F_F").css("display", "block");
                d3.select("#_x33_4_x5F_Nakd_x5F_F").raise(); 
            }, function() {
                $("#_x33_4_x5F_Nakd_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Penthouse").hover(function() {
                $("#_x30_1_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Penthouse").hover(function() {
                $("#_x30_2_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Penthouse").hover(function() {
                $("#_x30_3_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Penthouse").hover(function() {
                $("#_x30_4_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Penthouse").hover(function() {
                $("#_x30_5_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Penthouse").hover(function() {
                $("#_x30_6_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Penthouse").hover(function() {
                $("#_x30_7_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Penthouse").hover(function() {
                $("#_x30_8_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Penthouse").hover(function() {
                $("#_x30_9_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x30_9_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x30_9_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Penthouse").hover(function() {
                $("#_x31_0_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_0_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_0_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Penthouse").hover(function() {
                $("#_x31_1_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_1_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_1_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Penthouse").hover(function() {
                $("#_x31_2_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_2_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_2_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Penthouse").hover(function() {
                $("#_x31_3_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_3_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_3_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Penthouse").hover(function() {
                $("#_x31_4_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_4_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_4_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Penthouse").hover(function() {
                $("#_x31_5_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_5_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_5_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Penthouse").hover(function() {
                $("#_x31_6_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_6_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_6_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Penthouse").hover(function() {
                $("#_x31_7_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_7_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_7_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_Penthouse").hover(function() {
                $("#_x31_8_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_8_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_8_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_Penthouse").hover(function() {
                $("#_x31_9_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x31_9_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x31_9_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_Penthouse").hover(function() {
                $("#_x32_0_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x32_0_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x32_0_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_Penthouse").hover(function() {
                $("#_x32_1_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x32_1_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x32_1_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_Penthouse").hover(function() {
                $("#_x32_2_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x32_2_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x32_2_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_Penthouse").hover(function() {
                $("#_x32_3_x5F_Penthouse_x5F_f").css("display", "block");
                d3.select("#_x32_3_x5F_Penthouse_x5F_f").raise(); 
            }, function() {
                $("#_x32_3_x5F_Penthouse_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Lions").hover(function() {
                $("#_x30_1_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Lions").hover(function() {
                $("#_x30_2_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Lions").hover(function() {
                $("#_x30_3_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Lions").hover(function() {
                $("#_x30_4_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Lions").hover(function() {
                $("#_x30_5_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Lions").hover(function() {
                $("#_x30_6_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Lions").hover(function() {
                $("#_x30_7_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Lions").hover(function() {
                $("#_x30_8_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Lions").hover(function() {
                $("#_x30_9_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x30_9_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x30_9_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Lions").hover(function() {
                $("#_x31_0_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x31_0_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x31_0_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Lions").hover(function() {
                $("#_x31_1_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x31_1_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x31_1_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Lions").hover(function() {
                $("#_x31_2_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x31_2_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x31_2_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Lions").hover(function() {
                $("#_x31_3_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x31_3_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x31_3_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Lions").hover(function() {
                $("#_x31_4_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x31_4_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x31_4_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Lions").hover(function() {
                $("#_x31_5_x5F_Lions_x5F_f").css("display", "block");
                d3.select("#_x31_5_x5F_Lions_x5F_f").raise(); 
            }, function() {
                $("#_x31_5_x5F_Lions_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_PlayboySW").hover(function() {
                $("#_x30_1_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_PlayboySW").hover(function() {
                $("#_x30_2_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_PlayboySW").hover(function() {
                $("#_x30_3_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_PlayboySW").hover(function() {
                $("#_x30_4_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_PlayboySW").hover(function() {
                $("#_x30_5_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_PlayboySW").hover(function() {
                $("#_x30_6_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_PlayboySW").hover(function() {
                $("#_x30_7_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_PlayboySW").hover(function() {
                $("#_x30_8_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_PlayboySW").hover(function() {
                $("#_x30_9_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_PlayboySW").hover(function() {
                $("#_x31_0_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_PlayboySW").hover(function() {
                $("#_x31_1_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_PlayboySW").hover(function() {
                $("#_x31_2_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_PlayboySW").hover(function() {
                $("#_x31_3_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_PlayboySW").hover(function() {
                $("#_x31_4_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_PlayboySW").hover(function() {
                $("#_x31_5_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_PlayboySW").hover(function() {
                $("#_x31_6_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_6_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_6_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_PlayboySW").hover(function() {
                $("#_x31_7_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_7_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_7_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_PlayboySW").hover(function() {
                $("#_x31_8_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_8_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_8_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_PlayboySW").hover(function() {
                $("#_x31_9_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x31_9_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x31_9_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_PlayboySW").hover(function() {
                $("#_x32_0_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_0_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_0_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_PlayboySW").hover(function() {
                $("#_x32_1_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_1_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_1_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_PlayboySW").hover(function() {
                $("#_x32_2_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_2_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_2_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_PlayboySW").hover(function() {
                $("#_x32_3_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_3_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_3_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_4_x5F_PlayboySW").hover(function() {
                $("#_x32_4_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_4_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_4_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_5_x5F_PlayboySW").hover(function() {
                $("#_x32_5_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_5_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_5_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_6_x5F_PlayboySW").hover(function() {
                $("#_x32_6_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_6_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_6_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_7_x5F_PlayboySW").hover(function() {
                $("#_x32_7_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_7_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_7_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_8_x5F_PlayboySW").hover(function() {
                $("#_x32_8_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_8_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_8_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_9_x5F_PlayboySW").hover(function() {
                $("#_x32_9_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x32_9_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x32_9_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_1_x5F_PlayboySW").hover(function() {
                $("#_x33_1_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x33_1_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x33_1_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_0_x5F_PlayboySW").hover(function() {
                $("#_x33_0_x5F_PlayboySW_x5F_F").css("display", "block");
                d3.select("#_x33_0_x5F_PlayboySW_x5F_F").raise(); 
            }, function() {
                $("#_x33_0_x5F_PlayboySW_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_PlayboyCOL").hover(function() {
                $("#_x30_1_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_PlayboyCOL").hover(function() {
                $("#_x30_2_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_PlayboyCOL").hover(function() {
                $("#_x30_3_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_PlayboyCOL").hover(function() {
                $("#_x30_4_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_PlayboyCOL").hover(function() {
                $("#_x30_5_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_PlayboyCOL").hover(function() {
                $("#_x30_6_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_PlayboyCOL").hover(function() {
                $("#_x30_7_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_PlayboyCOL").hover(function() {
                $("#_x30_8_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_PlayboyCOL").hover(function() {
                $("#_x30_9_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_PlayboyCOL").hover(function() {
                $("#_x31_0_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_PlayboyCOL").hover(function() {
                $("#_x31_1_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_PlayboyCOL").hover(function() {
                $("#_x31_2_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_PlayboyCOL").hover(function() {
                $("#_x31_3_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_PlayboyCOL").hover(function() {
                $("#_x31_4_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_PlayboyCOL").hover(function() {
                $("#_x31_5_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_PlayboyCOL").hover(function() {
                $("#_x31_6_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_6_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_6_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_PlayboyCOL").hover(function() {
                $("#_x31_7_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_7_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_7_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_PlayboyCOL").hover(function() {
                $("#_x31_8_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_8_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_8_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_PlayboyCOL").hover(function() {
                $("#_x31_9_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x31_9_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x31_9_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_PlayboyCOL").hover(function() {
                $("#_x32_0_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x32_0_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x32_0_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_PlayboyCOL").hover(function() {
                $("#_x32_1_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x32_1_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x32_1_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_PlayboyCOL").hover(function() {
                $("#_x32_2_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x32_2_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x32_2_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_PlayboyCOL").hover(function() {
                $("#_x32_3_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x32_3_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x32_3_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_4_x5F_PlayboyCOL").hover(function() {
                $("#_x32_4_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x32_4_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x32_4_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_5_x5F_PlayboyCOL").hover(function() {
                $("#_x32_5_x5F_PlayboyCOL_x5F_F").css("display", "block");
                d3.select("#_x32_5_x5F_PlayboyCOL_x5F_F").raise(); 
            }, function() {
                $("#_x32_5_x5F_PlayboyCOL_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x30_1_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x30_2_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x30_3_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x30_4_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x30_5_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x30_6_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x30_7_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x30_8_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x30_9_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x31_0_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x31_1_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x31_2_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x31_3_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x31_4_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Anoter_Filthy_Magazine").hover(function() {
                $("#_x31_5_x5F_Another_Filthy_Magazine_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_Another_Filthy_Magazine_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_Another_Filthy_Magazine_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_PlayboyITA").hover(function() {
                $("#_x30_1_x5F_PlayboyITA_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_PlayboyITA_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_PlayboyITA_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Self_x5F_Control").hover(function() {
                $("#_x30_1_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Self_x5F_Control").hover(function() {
                $("#_x30_2_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Self_x5F_Control").hover(function() {
                $("#_x30_3_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Self_x5F_Control").hover(function() {
                $("#_x30_4_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Self_x5F_Control").hover(function() {
                $("#_x30_5_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Self_x5F_Control").hover(function() {
                $("#_x30_6_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Self_x5F_Control").hover(function() {
                $("#_x30_7_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Self_x5F_Control").hover(function() {
                $("#_x30_8_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Self_x5F_Control").hover(function() {
                $("#_x30_9_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x30_9_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x30_9_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Self_x5F_Control").hover(function() {
                $("#_x31_0_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x31_0_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x31_0_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Self_x5F_Control").hover(function() {
                $("#_x31_1_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x31_1_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x31_1_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Self_x5F_Control").hover(function() {
                $("#_x31_2_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x31_2_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x31_2_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Self_x5F_Control").hover(function() {
                $("#_x31_3_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x31_3_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x31_3_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Self_x5F_Control").hover(function() {
                $("#_x31_4_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x31_4_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x31_4_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Self_x5F_Control").hover(function() {
                $("#_x31_5_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x31_5_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x31_5_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Self_x5F_Control").hover(function() {
                $("#_x31_6_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x31_6_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x31_6_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Self_x5F_Control").hover(function() {
                $("#_x31_7_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x31_7_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x31_7_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_Self_x5F_Control").hover(function() {
                $("#_x31_8_x5F_Self_x5F_Control_x5F_f").css("display", "block");
                d3.select("#_x31_8_x5F_Self_x5F_Control_x5F_f").raise(); 
            }, function() {
                $("#_x31_8_x5F_Self_x5F_Control_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_PlayboyMX").hover(function() {
                $("#_x30_1_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_PlayboyMX").hover(function() {
                $("#_x30_2_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_PlayboyMX").hover(function() {
                $("#_x30_3_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_PlayboyMX").hover(function() {
                $("#_x30_4_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_PlayboyMX").hover(function() {
                $("#_x30_5_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_PlayboyMX").hover(function() {
                $("#_x30_6_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_PlayboyMX").hover(function() {
                $("#_x30_7_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_PlayboyMX").hover(function() {
                $("#_x30_8_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_PlayboyMX").hover(function() {
                $("#_x30_9_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_PlayboyMX").hover(function() {
                $("#_x31_0_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_PlayboyMX").hover(function() {
                $("#_x31_1_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_PlayboyMX").hover(function() {
                $("#_x31_2_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_PlayboyMX").hover(function() {
                $("#_x31_3_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_PlayboyMX").hover(function() {
                $("#_x31_4_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_PlayboyMX").hover(function() {
                $("#_x31_5_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_PlayboyMX").hover(function() {
                $("#_x31_6_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_6_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_6_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_PlayboyMX").hover(function() {
                $("#_x31_7_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_7_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_7_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_PlayboyMX").hover(function() {
                $("#_x31_8_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_8_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_8_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_PlayboyMX").hover(function() {
                $("#_x31_9_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x31_9_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x31_9_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_PlayboyMX").hover(function() {
                $("#_x32_0_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x32_0_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x32_0_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_PlayboyMX").hover(function() {
                $("#_x32_1_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x32_1_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x32_1_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_PlayboyMX").hover(function() {
                $("#_x32_2_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x32_2_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x32_2_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_PlayboyMX").hover(function() {
                $("#_x32_3_x5F_PlayboyMX_x5F_F").css("display", "block");
                d3.select("#_x32_3_x5F_PlayboyMX_x5F_F").raise(); 
            }, function() {
                $("#_x32_3_x5F_PlayboyMX_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x30_1_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x30_2_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x30_3_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x30_4_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x30_5_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x30_6_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x30_7_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x30_8_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x30_9_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x30_9_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x30_9_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x31_0_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x31_0_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x31_0_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x31_1_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x31_1_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x31_1_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x31_2_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x31_2_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x31_2_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x31_3_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x31_3_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x31_3_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x31_4_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x31_4_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x31_4_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x31_5_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x31_5_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x31_5_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x31_6_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x31_6_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x31_6_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Penthouse_x5F_AU").hover(function() {
                $("#_x31_7_x5F_Penthouse_x5F_AU_x5F_f").css("display", "block");
                d3.select("#_x31_7_x5F_Penthouse_x5F_AU_x5F_f").raise(); 
            }, function() {
                $("#_x31_7_x5F_Penthouse_x5F_AU_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_PlayboyGE").hover(function() {
                $("#_x30_1_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_PlayboyGE").hover(function() {
                $("#_x30_2_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_PlayboyGE").hover(function() {
                $("#_x30_3_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_PlayboyGE").hover(function() {
                $("#_x30_4_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_PlayboyGE").hover(function() {
                $("#_x30_5_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_PlayboyGE").hover(function() {
                $("#_x30_6_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_PlayboyGE").hover(function() {
                $("#_x30_7_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_PlayboyGE").hover(function() {
                $("#_x30_8_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_PlayboyGE").hover(function() {
                $("#_x30_9_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_PlayboyGE").hover(function() {
                $("#_x31_0_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});
$(document).ready(function() {    
            $("#_x31_1_x5F_PlayboyGE").hover(function() {
                $("#_x31_1_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_PlayboyGE").hover(function() {
                $("#_x31_2_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_PlayboyGE").hover(function() {
                $("#_x31_3_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_PlayboyGE").hover(function() {
                $("#_x31_4_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_PlayboyGE").hover(function() {
                $("#_x31_5_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_PlayboyGE").hover(function() {
                $("#_x31_6_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x31_6_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_6_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_PlayboyGE").hover(function() {
                $("#_x31_7_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x31_7_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_7_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_PlayboyGE").hover(function() {
                $("#_x31_8_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_8_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_PlayboyGE").hover(function() {
                $("#_x31_9_x5F_PlayboyGE_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_PlayboyGE_x5F_F").raise(); 
            }, function() {
                $("#_x31_9_x5F_PlayboyGE_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_PlayboyPO").hover(function() {
                $("#_x30_1_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_PlayboyPO").hover(function() {
                $("#_x30_2_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_PlayboyPO_1_").hover(function() {
                $("#_x30_3_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_PlayboyPO").hover(function() {
                $("#_x30_4_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_PlayboyPO").hover(function() {
                $("#_x30_5_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_PlayboyPO").hover(function() {
                $("#_x30_6_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_PlayboyPO").hover(function() {
                $("#_x30_7_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_PlayboyPO").hover(function() {
                $("#_x30_8_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_PlayboyPO").hover(function() {
                $("#_x30_9_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_PlayboyPO").hover(function() {
                $("#_x31_0_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_PlayboyPO").hover(function() {
                $("#_x31_1_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_PlayboyPO").hover(function() {
                $("#_x31_2_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_PlayboyPO").hover(function() {
                $("#_x31_3_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_PlayboyPO").hover(function() {
                $("#_x31_4_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_PlayboyPO").hover(function() {
                $("#_x31_5_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_PlayboyPO").hover(function() {
                $("#_x31_6_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_6_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_6_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_PlayboyPO").hover(function() {
                $("#_x31_7_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_7_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_7_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_PlayboyPO").hover(function() {
                $("#_x31_8_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_8_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_8_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_PlayboyPO").hover(function() {
                $("#_x31_9_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x31_9_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x31_9_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_PlayboyPO").hover(function() {
                $("#_x32_0_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x32_0_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x32_0_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_PlayboyPO").hover(function() {
                $("#_x32_1_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x32_1_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x32_1_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_PlayboyPO").hover(function() {
                $("#_x32_2_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x32_2_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x32_2_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_PlayboyPO").hover(function() {
                $("#_x32_3_x5F_PlayboyPO_x5F_F").css("display", "block");
                d3.select("#_x32_3_x5F_PlayboyPO_x5F_F").raise(); 
            }, function() {
                $("#_x32_3_x5F_PlayboyPO_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Leste").hover(function() {
                $("#_x30_1_x5F_Leste_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Leste_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Leste_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Leste").hover(function() {
                $("#_x30_2_x5F_Leste_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Leste_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Leste_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Leste").hover(function() {
                $("#_x30_3_x5F_Leste_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Leste_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Leste_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Leste").hover(function() {
                $("#_x30_4_x5F_Leste_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Leste_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Leste_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Leste").hover(function() {
                $("#_x30_5_x5F_Leste_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Leste_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Leste_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Leste").hover(function() {
                $("#_x30_6_x5F_Leste_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_Leste_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_Leste_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Leste").hover(function() {
                $("#_x30_7_x5F_Leste_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_Leste_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_Leste_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Leste").hover(function() {
                $("#_x30_8_x5F_Leste_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_Leste_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_Leste_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Pinups").hover(function() {
                $("#_x30_1_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Pinups").hover(function() {
                $("#_x30_2_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Pinups").hover(function() {
                $("#_x30_3_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Pinups").hover(function() {
                $("#_x30_4_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Pinups").hover(function() {
                $("#_x30_5_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Pinups").hover(function() {
                $("#_x30_6_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Pinups").hover(function() {
                $("#_x30_7_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Pinups").hover(function() {
                $("#_x30_8_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Pinups").hover(function() {
                $("#_x30_9_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x30_9_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x30_9_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Pinups").hover(function() {
                $("#_x31_0_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x31_0_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x31_0_x5F_Pinups_x5F_f").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#_x31_1_x5F_Pinups").hover(function() {
                $("#_x31_1_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x31_1_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x31_1_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Pinups").hover(function() {
                $("#_x31_2_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x31_2_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x31_2_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Pinups").hover(function() {
                $("#_x31_3_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x31_3_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x31_3_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Pinups").hover(function() {
                $("#_x31_4_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x31_4_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x31_4_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Pinups").hover(function() {
                $("#_x31_5_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x31_5_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x31_5_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Pinups").hover(function() {
                $("#_x31_6_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x31_6_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x31_6_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Pinups").hover(function() {
                $("#_x31_7_x5F_Pinups_x5F_f").css("display", "block");
                d3.select("#_x31_7_x5F_Pinups_x5F_f").raise(); 
            }, function() {
                $("#_x31_7_x5F_Pinups_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Ossì").hover(function() {
                $("#_x30_1_x5F_Ossì_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Ossì_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Ossì_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Ossì").hover(function() {
                $("#_x30_2_x5F_Ossì_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Ossì_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Ossì_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Ossì").hover(function() {
                $("#_x30_3_x5F_Ossì_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Ossì_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Ossì_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Ossì").hover(function() {
                $("#_x30_4_x5F_Ossì_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Ossì_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Ossì_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Ossì").hover(function() {
                $("#_x30_5_x5F_Ossì_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Ossì_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Ossì_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Ossì").hover(function() {
                $("#_x30_6_x5F_Ossì_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_Ossì_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Ossì_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Ladybeard").hover(function() {
                $("#_x30_1_x5F_Ladybeard_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Ladybeard_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Ladybeard_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Ladybeard").hover(function() {
                $("#_x30_2_x5F_Ladybeard_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Ladybeard_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Ladybeard_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Ladybeard").hover(function() {
                $("#_x30_3_x5F_Ladybeard_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Ladybeard_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Ladybeard_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Polyester").hover(function() {
                $("#_x30_1_x5F_Polyester_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Polyester_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Polyester_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Polyester").hover(function() {
                $("#_x30_2_x5F_Polyester_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Polyester_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Polyester_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Polyester").hover(function() {
                $("#_x30_3_x5F_Polyester_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Polyester_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Polyester_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Polyester").hover(function() {
                $("#_x30_4_x5F_Polyester_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Polyester_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Polyester_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Polyester").hover(function() {
                $("#_x30_5_x5F_Polyester_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Polyester_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Polyester_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Polyester").hover(function() {
                $("#_x30_6_x5F_Polyester_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Polyester_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Polyester_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Polyester").hover(function() {
                $("#_x30_7_x5F_Polyester_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_Polyester_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_Polyester_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Polyester").hover(function() {
                $("#_x30_8_x5F_Polyester_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_Polyester_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_Polyester_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Cavie").hover(function() {
                $("#_x30_1_x5F_Cavie_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Cavie_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Cavie_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Cavie").hover(function() {
                $("#_x30_2_x5F_Cavie_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Cavie_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Cavie_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Cavie").hover(function() {
                $("#_x30_3_x5F_Cavie_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Cavie_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Cavie_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Cavie").hover(function() {
                $("#_x30_4_x5F_Cavie_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Cavie_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Cavie_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Cavie").hover(function() {
                $("#_x30_5_x5F_Cavie_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Cavie_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Cavie_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Odiseo").hover(function() {
                $("#_x30_1_x5F_Odiseo_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Odiseo_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Odiseo_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Odiseo").hover(function() {
                $("#_x30_2_x5F_Odiseo_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Odiseo_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Odiseo_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Odiseo").hover(function() {
                $("#_x30_3_x5F_Odiseo_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Odiseo_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Odiseo_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Odiseo").hover(function() {
                $("#_x30_4_x5F_Odiseo_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Odiseo_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Odiseo_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Odiseo").hover(function() {
                $("#_x30_5_x5F_Odiseo_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Odiseo_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Odiseo_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Baron").hover(function() {
                $("#_x30_1_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Baron").hover(function() {
                $("#_x30_2_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_1_x5F_Baron").hover(function() {
                $("#_x30_3_1_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_3_1_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_1_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_2_x5F_Baron").hover(function() {
                $("#_x30_3_2_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_3_2_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_2_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_3_x5F_Baron").hover(function() {
                $("#_x30_3_3_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_3_3_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_3_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Baron").hover(function() {
                $("#_x30_4_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Baron").hover(function() {
                $("#_x30_5_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Baron").hover(function() {
                $("#_x30_6_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Baron").hover(function() {
                $("#_x30_7_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Baron").hover(function() {
                $("#_x30_8_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Baron").hover(function() {
                $("#_x30_9_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Baron").hover(function() {
                $("#_x31_0_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Baron").hover(function() {
                $("#_x31_1_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Baron").hover(function() {
                $("#_x31_2_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Baron").hover(function() {
                $("#_x31_3_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_Baron").hover(function() {
                $("#_x31_4_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x31_4_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_1_x5F_baron").hover(function() {
                $("#_x31_5_1_x5F_baron_x5F_F").css("display", "block");
                d3.select("#_x31_5_1_x5F_baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_1_x5F_baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_2_x5F_Baron").hover(function() {
                $("#_x31_5_2_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x31_5_2_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_2_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_Baron").hover(function() {
                $("#_x31_6_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x31_6_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_6_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_Baron").hover(function() {
                $("#_x31_7_x5F_baron_x5F_F").css("display", "block");
                d3.select("#_x31_7_x5F_baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_7_x5F_baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_Baron").hover(function() {
                $("#_x31_8_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x31_8_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_8_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_Baron").hover(function() {
                $("#_x31_9_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x31_9_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x31_9_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_Baron").hover(function() {
                $("#_x32_0_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x32_0_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x32_0_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_Baron").hover(function() {
                $("#_x32_1_x5F_Baron_x5F_F").css("display", "block");
                d3.select("#_x32_1_x5F_Baron_x5F_F").raise(); 
            }, function() {
                $("#_x32_1_x5F_Baron_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Phile").hover(function() {
                $("#_x30_1_x5F_Phile_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Phile_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Phile_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Phile").hover(function() {
                $("#_x30_2_x5F_Phile_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Phile_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Phile_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Phile").hover(function() {
                $("#_x30_3_x5F_Phile_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Phile_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Phile_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Phile").hover(function() {
                $("#_x30_4_x5F_Phile_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Phile_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Phile_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Baroness").hover(function() {
                $("#_x30_1_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Baroness").hover(function() {
                $("#_x30_2_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Baroness").hover(function() {
                $("#_x30_3_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Baroness").hover(function() {
                $("#_x30_4_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Baroness").hover(function() {
                $("#_x30_5_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Baroness").hover(function() {
                $("#_x30_6_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Baroness").hover(function() {
                $("#_x30_7_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_Baroness").hover(function() {
                $("#_x30_8_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x30_8_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x30_8_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_Baroness").hover(function() {
                $("#_x30_9_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x30_9_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x30_9_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_Baroness").hover(function() {
                $("#_x31_0_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x31_0_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x31_0_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_Baroness").hover(function() {
                $("#_x31_1_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x31_1_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x31_1_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_Baroness").hover(function() {
                $("#_x31_2_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x31_2_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x31_2_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_Baroness").hover(function() {
                $("#_x31_3_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x31_3_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x31_3_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_1_x5F_Baroness").hover(function() {
                $("#_x31_4_1_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x31_4_1_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_1_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_2_x5F_Baroness").hover(function() {
                $("#_x31_4_2_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x31_4_2_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_2_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_3_x5F_Baroness").hover(function() {
                $("#_x31_4_3_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x31_4_3_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x31_4_3_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_Baroness").hover(function() {
                $("#_x31_5_x5F_Baroness_x5F_F").css("display", "block");
                d3.select("#_x31_5_x5F_Baroness_x5F_F").raise(); 
            }, function() {
                $("#_x31_5_x5F_Baroness_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Hot_x5F_Sauce").hover(function() {
                $("#_x30_1_x5F_Hot_x5F_Sauce_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Hot_x5F_Sauce_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Hot_x5F_Sauce_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Hot_x5F_Sauce").hover(function() {
                $("#_x30_2_x5F_Hot_x5F_Sauce_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Hot_x5F_Sauce_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Hot_x5F_Sauce_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Hot_x5F_Sauce").hover(function() {
                $("#_x30_3_x5F_Hot_x5F_Sauce_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Hot_x5F_Sauce_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Hot_x5F_Sauce_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Hot_x5F_Sauce").hover(function() {
                $("#_x30_4_x5F_Hot_x5F_Sauce_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Hot_x5F_Sauce_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Hot_x5F_Sauce_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Hot_x5F_Sauce").hover(function() {
                $("#_x30_5_x5F_Hot_x5F_Sauce_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_Hot_x5F_Sauce_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_Hot_x5F_Sauce_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Hot_x5F_Sauce").hover(function() {
                $("#_x30_6_x5F_Hot_x5F_Sauce_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_Hot_x5F_Sauce_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_Hot_x5F_Sauce_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Hot_x5F_Sauce").hover(function() {
                $("#_x30_7_x5F_Hot_x5F_Sauce_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_Hot_x5F_Sauce_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_Hot_x5F_Sauce_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Math").hover(function() {
                $("#_x30_1_x5F_Math_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Math_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Math_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Math").hover(function() {
                $("#_x30_2_x5F_Math_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Math_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Math_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Math").hover(function() {
                $("#_x30_3_x5F_Math_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Math_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Math_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Suspira").hover(function() {
                $("#_x30_1_x5F_Suspira_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Suspira_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Suspira_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Suspira").hover(function() {
                $("#_x30_2_x5F_Suspira_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Suspira_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Suspira_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Cold_x5F_Cuts").hover(function() {
                $("#_x30_1_x5F_Cold_x5F_Cuts_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Cold_x5F_Cuts_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Cold_x5F_Cuts_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Cold_x5F_Cuts").hover(function() {
                $("#_x30_2_x5F_Cold_x5F_Cuts_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_Cold_x5F_Cuts_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_Cold_x5F_Cuts_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Cold_x5F_Cuts").hover(function() {
                $("#_x30_3_x5F_Cold_x5F_Cuts_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_Cold_x5F_Cuts_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_Cold_x5F_Cuts_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Cold_x5F_Cuts").hover(function() {
                $("#_x30_4_x5F_Cold_x5F_Cuts_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_Cold_x5F_Cuts_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_Cold_x5F_Cuts_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Lyra").hover(function() {
                $("#_x30_1_x5F_Lyra_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_Lyra_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_Lyra_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Sabat").hover(function() {
                $("#_x30_1_x5F_Sabat_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Sabat_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Sabat_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_S").hover(function() {
                $("#_x30_1_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_S").hover(function() {
                $("#_x30_2_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_S").hover(function() {
                $("#_x30_3_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_S").hover(function() {
                $("#_x30_4_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_S").hover(function() {
                $("#_x30_5_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_S").hover(function() {
                $("#_x30_6_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_S").hover(function() {
                $("#_x30_7_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_S").hover(function() {
                $("#_x30_8_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_S").hover(function() {
                $("#_x30_9_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_9_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x30_9_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_S").hover(function() {
                $("#_x31_0_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x31_0_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_0_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_S").hover(function() {
                $("#_x31_1_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x31_1_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_1_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_S").hover(function() {
                $("#_x31_2_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x31_2_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_2_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_S").hover(function() {
                $("#_x31_3_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x31_3_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_3_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_S").hover(function() {
                $("#_x31_4_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x31_4_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_4_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_S").hover(function() {
                $("#_x31_5_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_5_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_S").hover(function() {
                $("#_x31_6_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x31_6_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_6_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_S").hover(function() {
                $("#_x31_7_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x31_7_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_7_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_S").hover(function() {
                $("#_x31_8_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x31_8_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_8_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_S").hover(function() {
                $("#_x31_9_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x31_9_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x31_9_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_0_x5F_S").hover(function() {
                $("#_x32_0_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_0_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_0_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_1_x5F_S").hover(function() {
                $("#_x32_1_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_1_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_1_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_2_x5F_S").hover(function() {
                $("#_x32_2_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_2_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_2_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_3_x5F_S").hover(function() {
                $("#_x32_3_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_3_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_3_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_4_x5F_S").hover(function() {
                $("#_x32_4_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_4_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_4_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_5_x5F_S").hover(function() {
                $("#_x32_5_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_5_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_5_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_6_x5F_S").hover(function() {
                $("#_x32_6_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_6_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_6_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_7_x5F_S").hover(function() {
                $("#_x32_7_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_7_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_7_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_8_x5F_S").hover(function() {
                $("#_x32_8_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_8_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_8_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x32_9_x5F_S").hover(function() {
                $("#_x32_9_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x32_9_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x32_9_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_0_x5F_S").hover(function() {
                $("#_x33_0_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_0_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_0_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_1_x5F_S").hover(function() {
                $("#_x33_1_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_1_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_1_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_2_x5F_S").hover(function() {
                $("#_x33_2_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_2_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_2_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_3_x5F_S").hover(function() {
                $("#_x33_3_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_3_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_3_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_4_x5F_S").hover(function() {
                $("#_x33_4_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_4_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_4_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_5_x5F_S").hover(function() {
                $("#_x33_5_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_5_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_5_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_6_x5F_S").hover(function() {
                $("#_x33_6_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_6_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_6_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_7_x5F_S").hover(function() {
                $("#_x33_7_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_7_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_7_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_8_x5F_S").hover(function() {
                $("#_x33_8_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_8_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_8_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x33_9_x5F_S").hover(function() {
                $("#_x33_9_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x33_9_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x33_9_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_0_x5F_S").hover(function() {
                $("#_x34_0_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x34_0_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x34_0_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_1_x5F_S").hover(function() {
                $("#_x34_1_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x34_1_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x34_1_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_2_x5F_S").hover(function() {
                $("#_x34_2_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x34_2_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x34_2_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_3_x5F_S").hover(function() {
                $("#_x34_3_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x34_3_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x34_3_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_4_x5F_S").hover(function() {
                $("#_x34_4_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x34_4_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x34_4_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_5_x5F_S").hover(function() {
                $("#_x34_5_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x34_5_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x34_5_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_6_x5F_S").hover(function() {
                $("#_x34_6_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x34_6_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x34_6_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x34_7_x5F_S").hover(function() {
                $("#_x34_7_x5F_S_x5F_f").css("display", "block");
                d3.select("#_x34_7_x5F_S_x5F_f").raise(); 
            }, function() {
                $("#_x34_7_x5F_S_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Pop").hover(function() {
                $("#_x30_1_x5F_Pop_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Pop_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Pop_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Pop").hover(function() {
                $("#_x30_2_x5F_Pop_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Pop_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Pop_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Nasty").hover(function() {
                $("#_x30_1_x5F_Nasty_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Nasty_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Nasty_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Nasty").hover(function() {
                $("#_x30_2_x5F_Nasty_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Nasty_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Nasty_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Nasty").hover(function() {
                $("#_x30_3_x5F_Nasty_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Nasty_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Nasty_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Nasty").hover(function() {
                $("#_x30_4_x5F_Nasty_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Nasty_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Nasty_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Nasty").hover(function() {
                $("#_x30_5_x5F_Nasty_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Nasty_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Nasty_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Nasty").hover(function() {
                $("#_x30_6_x5F_Nasty_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_Nasty_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Nasty_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_Nasty").hover(function() {
                $("#_x30_7_x5F_Nasty_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_Nasty_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_Nasty_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Le_Dauphin").hover(function() {
                $("#_x30_1_x5F_Le_Dauphin_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Le_Dauphin_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Le_Dauphin_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Le_Dauphin").hover(function() {
                $("#_x30_2_x5F_Le_Dauphin_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Le_Dauphin_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Le_Dauphin_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Le_Dauphin").hover(function() {
                $("#_x30_3_x5F_Le_Dauphin_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Le_Dauphin_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Le_Dauphin_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Le_Dauphin").hover(function() {
                $("#_x30_4_x5F_Le_Dauphin_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Le_Dauphin_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Le_Dauphin_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Le_Dauphin").hover(function() {
                $("#_x30_5_x5F_Le_Dauphin_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Le_Dauphin_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Le_Dauphin_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_Self_Service").hover(function() {
                $("#_x30_1_x5F_Self_Service_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_Self_Service_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_Self_Service_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_Self_Service").hover(function() {
                $("#_x30_2_x5F_Self_Servce_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_Self_Servce_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_Self_Servce_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_Self_Service").hover(function() {
                $("#_x30_3_x5F_Self_Service_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_Self_Service_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_Self_Service_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_Self_Service").hover(function() {
                $("#_x30_4_x5F_Self_Service_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_Self_Service_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_Self_Service_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_Self_Service").hover(function() {
                $("#_x30_5_x5F_Self_Service_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_Self_Service_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_Self_Service_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_Self_Service").hover(function() {
                $("#_x30_6_x5F_Self_Service_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_Self_Service_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_Self_Service_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_C-Heads").hover(function() {
                $("#_x30_1_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x30_1_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x30_1_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_C-Heads").hover(function() {
                $("#_x30_2_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x30_2_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x30_2_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_C-Heads").hover(function() {
                $("#_x30_3_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x30_3_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x30_3_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_C-Heads").hover(function() {
                $("#_x30_4_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x30_4_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x30_4_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_C-Heads").hover(function() {
                $("#_x30_5_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x30_5_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x30_5_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_C-Heads").hover(function() {
                $("#_x30_6_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x30_6_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x30_6_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_C-Heads").hover(function() {
                $("#_x30_7_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x30_7_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x30_7_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_8_x5F_C-Heads").hover(function() {
                $("#_x30_8_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x30_8_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x30_8_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_9_x5F_C-Heads").hover(function() {
                $("#_x30_9_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x30_9_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x30_9_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_0_x5F_C-Heads").hover(function() {
                $("#_x31_0_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_0_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_0_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_1_x5F_C-Heads").hover(function() {
                $("#_x31_1_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_1_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_1_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_2_x5F_C-Heads").hover(function() {
                $("#_x31_2_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_2_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_2_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_3_x5F_C-Heads").hover(function() {
                $("#_x31_3_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_3_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_3_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_4_x5F_C-Heads").hover(function() {
                $("#_x31_4_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_4_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_4_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_5_x5F_C-Heads").hover(function() {
                $("#_x31_5_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_5_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_5_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_6_x5F_C-Heads").hover(function() {
                $("#_x31_6_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_6_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_6_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_7_x5F_C-Heads").hover(function() {
                $("#_x31_7_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_7_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_7_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_8_x5F_C-Heads").hover(function() {
                $("#_x31_8_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_8_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_8_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x31_9_x5F_C-Heads").hover(function() {
                $("#_x31_9_x5F_C-Heads_x5F_f").css("display", "block");
                d3.select("#_x31_9_x5F_C-Heads_x5F_f").raise(); 
            }, function() {
                $("#_x31_9_x5F_C-Heads_x5F_f").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_1_x5F_True_Photo_Journal").hover(function() {
                $("#_x30_1_x5F_True_Photo_Journal_x5F_F").css("display", "block");
                d3.select("#_x30_1_x5F_True_Photo_Journal_x5F_F").raise(); 
            }, function() {
                $("#_x30_1_x5F_True_Photo_Journal_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_2_x5F_True_Photo_Journal").hover(function() {
                $("#_x30_2_x5F_True_Photo_Journal_x5F_F").css("display", "block");
                d3.select("#_x30_2_x5F_True_Photo_Journal_x5F_F").raise(); 
            }, function() {
                $("#_x30_2_x5F_True_Photo_Journal_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_3_x5F_True_Photo_Journal").hover(function() {
                $("#_x30_3_x5F_True_Photo_Journal_x5F_F").css("display", "block");
                d3.select("#_x30_3_x5F_True_Photo_Journal_x5F_F").raise(); 
            }, function() {
                $("#_x30_3_x5F_True_Photo_Journal_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_4_x5F_True_Photo_Journal").hover(function() {
                $("#_x30_4_x5F_True_Photo_Journal_x5F_F").css("display", "block");
                d3.select("#_x30_4_x5F_True_Photo_Journal_x5F_F").raise(); 
            }, function() {
                $("#_x30_4_x5F_True_Photo_Journal_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_5_x5F_True_Photo_Journal").hover(function() {
                $("#_x30_5_x5F_True_Photo_Journal_x5F_F").css("display", "block");
                d3.select("#_x30_5_x5F_True_Photo_Journal_x5F_F").raise(); 
            }, function() {
                $("#_x30_5_x5F_True_Photo_Journal_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_6_x5F_True_Photo_Journal").hover(function() {
                $("#_x30_6_x5F_True_Photo_Journal_x5F_F").css("display", "block");
                d3.select("#_x30_6_x5F_True_Photo_Journal_x5F_F").raise(); 
            }, function() {
                $("#_x30_6_x5F_True_Photo_Journal_x5F_F").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#_x30_7_x5F_True_Photo_Journal").hover(function() {
                $("#_x30_7_x5F_True_Photo_Journal_x5F_F").css("display", "block");
                d3.select("#_x30_7_x5F_True_Photo_Journal_x5F_F").raise(); 
            }, function() {
                $("#_x30_7_x5F_True_Photo_Journal_x5F_F").css("display", "none");
            });
});

/* viz 04 */

$(document).ready(function() {    
            $("#Instagram").click(function() {
                $("#instclick").css("display", "block");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#tornabase1").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#tornabase2").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#tornabase3").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#tornabase4").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#tornabase5").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#tornabase6").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#tornabase7").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine1").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine2").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine3").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
}); 

$(document).ready(function() {    
            $("#immagine4").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine5").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine6").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine7").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine8").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine9").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine10").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine11").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine12").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine13").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine14").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine15").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#immagine16").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "1");
                $("#_x32_W").css("opacity", "1");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "1");
                $("#_x31_5W").css("opacity", "1");
                $("#_x31_6W").css("opacity", "1");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "1");
                $("#_x32_M").css("opacity", "1");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "1");
                $("#_x36_M").css("opacity", "1");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "1");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "1");
                $("#_x31_1M").css("opacity", "1");
                $("#_x31_2M").css("opacity", "1");
            });
});

$(document).ready(function() {    
            $("#Pinterest").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "block");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#WeHeartIt").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "block");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#Facebook").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "block");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#Tumblr").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "block");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#Twitter").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "block");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#Tagged").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "1");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x34_M").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x34_Mclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "1");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x39_W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x39_Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "1");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x33_M").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x33_Mclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "1");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x31_1W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "1");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x38_W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x38_Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "1");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x37_W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x37_Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "1");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x31_0W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "1");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x34_W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x34_Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "1");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x33_W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x33_Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "1");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x36_W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x36_Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "1");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x31_2W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "1");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x31_3W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "1");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x37_M").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x37_Mclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "1");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x31_7W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "1");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x31_8W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x31_8Wclick").css("display", "block");
                $("#_x35_Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "0.2");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "1");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

$(document).ready(function() {    
            $("#_x35_W").click(function() {
                $("#instclick").css("display", "none");
                $("#pintclick").css("display", "none");
                $("#weclick").css("display", "none");
                $("#faceclick").css("display", "none");
                $("#tumclick").css("display", "none");
                $("#twitclick").css("display", "none");
                $("#tagclick").css("display", "none");
                $("#_x35_Wclick").css("display", "block");
                $("#_x31_8Wclick").css("display", "none");
                $("#_x31_7Wclick").css("display", "none");
                $("#_x37_Mclick").css("display", "none");
                $("#_x31_3Wclick").css("display", "none");
                $("#_x31_2Wclick").css("display", "none");
                $("#_x36_Wclick").css("display", "none");
                $("#_x33_Wclick").css("display", "none");
                $("#_x34_Wclick").css("display", "none");
                $("#_x31_0Wclick").css("display", "none");
                $("#_x37_Wclick").css("display", "none");
                $("#_x38_Wclick").css("display", "none");
                $("#_x31_1Wclick").css("display", "none");
                $("#_x33_Mclick").css("display", "none");
                $("#_x39_Wclick").css("display", "none");
                $("#_x34_Mclick").css("display", "none");
                $("#_x31_W").css("opacity", "0.2");
                $("#_x32_W").css("opacity", "0.2");
                $("#_x33_W").css("opacity", "0.2");
                $("#_x34_W").css("opacity", "0.2");
                $("#_x35_W").css("opacity", "1");
                $("#_x36_W").css("opacity", "0.2");
                $("#_x37_W").css("opacity", "0.2");
                $("#_x38_W").css("opacity", "0.2");
                $("#_x39_W").css("opacity", "0.2");
                $("#_x31_0W").css("opacity", "0.2");
                $("#_x31_1W").css("opacity", "0.2");
                $("#_x31_2W").css("opacity", "0.2");
                $("#_x31_3W").css("opacity", "0.2");
                $("#_x31_4W").css("opacity", "0.2");
                $("#_x31_5W").css("opacity", "0.2");
                $("#_x31_6W").css("opacity", "0.2");
                $("#_x31_7W").css("opacity", "0.2");
                $("#_x31_8W").css("opacity", "0.2");
                $("#_x31_M").css("opacity", "0.2");
                $("#_x32_M").css("opacity", "0.2");
                $("#_x33_M").css("opacity", "0.2");
                $("#_x34_M").css("opacity", "0.2");
                $("#_x35_M").css("opacity", "0.2");
                $("#_x36_M").css("opacity", "0.2");
                $("#_x37_M").css("opacity", "0.2");
                $("#_x38_M").css("opacity", "0.2");
                $("#_x39_M").css("opacity", "0.2");
                $("#_x31_0M").css("opacity", "0.2");
                $("#_x31_1M").css("opacity", "0.2");
                $("#_x31_2M").css("opacity", "0.2");
            });
});

/* maternity_separato */

$(document).ready(function() {    
            $("#BREASTFEEDING").click(function() {
                $("#breastfeeding_x5F_breastmilk_x5F_breastfeedingmom").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#BREASTFEEDINGMOM").click(function() {
                $("#breastfeeding_x5F_breastmilk_x5F_breastfeedingmom").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#BREASTMILK").click(function() {
                $("#breastfeeding_x5F_breastmilk_x5F_breastfeedingmom").css("display", "block");
            });
});

/* work */

$(document).ready(function() {    
            $("#PORTRAITPHOTOGRAPH").click(function() {
                $("#portraitphotograph").css("display", "block");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FASHIONBLOGGER").click(function() {
                $("#fashionblogger").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#PHOTO").click(function() {
                $("#photo").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#PORTRAIT").click(function() {
                $("#portrait").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MAKEUP").click(function() {
                $("#makeup").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MODELLIFE").click(function() {
                $("#modellife").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MAKEUPARTIST").click(function() {
                $("#makeupartist_1_").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#PHOTOSHOOT").click(function() {
                $("#photoshoot").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#PHOTOGRAPHER").click(function() {
                $("#photographer").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#WAKEUPANDMAKEUP").click(function() {
                $("#wakeupandmakeup").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#MODELING").click(function() {
                $("#modeling").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});


$(document).ready(function() {    
            $("#PHOTOMODEL").click(function() {
                $("#photomodel").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FITNESSGIRL").click(function() {
                $("#fitnessgirl").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#INSTAART").click(function() {
                $("#instaart_x5F_painting").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#PAINTING").click(function() {
                $("#instaart_x5F_painting").css("display", "block");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist_1_").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
            });
});

/* maternity */

$(document).ready(function() {    
            $("#LOVELY").click(function() {
                $("#lovely").css("display", "block");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#INSTABABY").click(function() {
                $("#instababy").css("display", "block");
                $("#lovely").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#INFANT").click(function() {
                $("#infant").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#ADORABLE").click(function() {
                $("#adorable").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#CHILDREN").click(function() {
                $("#children").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FAMILY").click(function() {
                $("#family").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#KIDS").click(function() {
                $("#kids").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BABYBOY").click(function() {
                $("#babyboy").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#YOUNG").click(function() {
                $("#young").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SMALL").click(function() {
                $("#small").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#CHILDRENPHOTO").click(function() {
                $("#childrenphoto").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BABY").click(function() {
                $("#baby").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SON").click(function() {
                $("#son").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BABYBLOGGER").click(function() {
                $("#babyblogger").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LITTLE").click(function() {
                $("#little").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BABIES").click(function() {
                $("#babies").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BREASTFEEDING").click(function() {
                $("#breastfeeding").css("display", "block");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
            });
});

/* breast_cancer */

$(document).ready(function() {    
            $("#BREASTCANCER").click(function() {
                $("#breast_cancer").css("display", "block");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#nippleprostethic").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#NIPPLEPROSTHETIC").click(function() {
                $("#nippleprostethic").css("display", "block");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#HEALING").click(function() {
                $("#healing").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#CANCER").click(function() {
                $("#cancer").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#healing").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BREASTCANCERAWARENESS").click(function() {
                $("#breastcancerawarness").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#REALISTIC").click(function() {
                $("#realistic").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BEAUTIFULWOMEN").click(function() {
                $("#beautiful_woman").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BEAUTIFUL").click(function() {
                $("#beautifulgirls_1_").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#PROSTHETICS").click(function() {
                $("#proesthetics").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SILICONE").click(function() {
                $("#silicone").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#NATURAL").click(function() {
                $("#natural").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MASTECTOMY").click(function() {
                $("#mastectomy").css("display", "block");
                $("#nippleprostethic").css("display", "none");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#breast_cancer").css("display", "none");
            });
});

/* lgbt */

$(document).ready(function() {    
            $("#GAYGEEK").click(function() {
                $("#gaygeek").css("display", "block");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SHIRTLESSMEN").click(function() {
                $("#shirtlessmen").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GAYTWINKS").click(function() {
                $("#gaytwinks").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#CUTEGAYS").click(function() {
                $("#cutegays").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#CUTEBOY").click(function() {
                $("#cuteboy").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkbo").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LGBTQIA").click(function() {
                $("#lgbtqia").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#PRETTYBOYS").click(function() {
                $("#prettyboys").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SHIRTLESSGUYS").click(function() {
                $("#shirtlessguys").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#TWINKBOY").click(function() {
                $("#tinkboy").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GAY").click(function() {
                $("#gay").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#TWINKS").click(function() {
                $("#twinks").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#CUDDLETIME").click(function() {
                $("#cuddletime").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LGTBQ").click(function() {
                $("#lgtbq").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BOYFRIENDS").click(function() {
                $("#boyfriends").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GAYBOYFRIEND").click(function() {
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GAYGEEKS").click(function() {
                $("#gaygeeks").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GAYMERS").click(function() {
                $("#gaymers").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GAYBOYFRIEND").click(function() {
                $("#gayboyfriend").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#lgtb").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LGTB").click(function() {
                $("#lgtb").css("display", "block");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
            });
});

/* feminism */

$(document).ready(function() {    
            $("#WOMAN").click(function() {
                $("#woman").css("display", "block");
                $("#nude").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#NUDE").click(function() {
                $("#nude").css("display", "block");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#NAKED").click(function() {
                $("#naked").css("display", "block");
                $("#woman").css("display", "none");
                $("#nude").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BODIES").click(function() {
                $("#bodies").css("display", "block");
                $("#woman").css("display", "none");
                $("#nude").css("display", "none");
                $("#naked").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#EMPOWER").click(function() {
                $("#enpower").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#WOMENEMPOWERMENT").click(function() {
                $("#womenenpowerment").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#EMPOWERINGWOMEN").click(function() {
                $("#enpoweringwomen").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#WOMANPOWER").click(function() {
                $("#womanpower").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MYBODYMYCHOICE").click(function() {
                $("#mybodymychoise").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#NIPS").click(function() {
                $("#nips").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FEMALEBODY").click(function() {
                $("#femalebody").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BODYPOSITIVE").click(function() {
                $("#bodypositive").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#WOMANBEAUTY").click(function() {
                $("#womanbeauty").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BODY").click(function() {
                $("#body_1_").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#WOMENPOWER").click(function() {
                $("#womenpower_x5F_grassetto").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#BODYPOSITIVY").click(function() {
                $("#bodypositvity").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SELFCARE").click(function() {
                $("#selfcare").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selflove").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SELFLOVE").click(function() {
                $("#selflove").css("display", "block");
                $("#nude").css("display", "none");
                $("#woman").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
            });
});

/* motivation */

$(document).ready(function() {    
            $("#SPIRITUALWAKE").click(function() {
                $("#spiritualwake").css("display", "block");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FORWARD").click(function() {
                $("#forward").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SURVIVOR").click(function() {
                $("#survivor").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LEADERS").click(function() {
                $("#leaders").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SOUL").click(function() {
                $("#soul").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREQUENCY").click(function() {
                $("#frequency").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#100DAYSOFHAPPINESS").click(function() {
                $("#_x31_00daysofhappiness").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GOALS").click(function() {
                $("#goals").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GOODVIBES").click(function() {
                $("#goodvibes").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MINDSET").click(function() {
                $("#mindset").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#METOO").click(function() {
                $("#metoo").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SPIRITUALLYAWAKENED").click(function() {
                $("#spirituallyawakened").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#INSIRATIONALQUOTES").click(function() {
                $("#inspirationalquotes").css("display", "block");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
            });
});

/* freefire */

$(document).ready(function() {    
            $("#FREEFIRELOCU").click(function() {
                $("#freefirelocu").css("display", "block");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIRENEWS").click(function() {
                $("#freefirenews").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIRE").click(function() {
                $("#freefire").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREESTYLERAP").click(function() {
                $("#freestylerap").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREMEME").click(function() {
                $("#freefirememe").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREBGID1").click(function() {
                $("#FREEFIREBGID").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREGARENA").click(function() {
                $("#freefiregarena").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIRESQUAD").click(function() {
                $("#freefiresquad").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREHACK").click(function() {
                $("#freefirehack").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREGAME").click(function() {
                $("#freefiregame").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GARENAFREEFIRE").click(function() {
                $("#garenafreefire").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREINDONESIA").click(function() {
                $("#freefireindonesia").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREUPDATE").click(function() {
                $("#freefire_x5F_update").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREBOOYAAH").click(function() {
                $("#freefirebooyaah").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREGOKIL").click(function() {
                $("#freefiregokil").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREKOCAHK").click(function() {
                $("#freefirekocahk").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIRE4ALL").click(function() {
                $("#freefire4all").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREVIDEO").click(function() {
                $("#freefirevideo").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREMANIA").click(function() {
                $("#freefiremania").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#GARENAOFFICIAL").click(function() {
                $("#garenaofficial").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREBUCIN").click(function() {
                $("#freefirebucin").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefireindo").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREEFIREINDO").click(function() {
                $("#freefireindo").css("display", "block");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
            });
});

/* followcatcher */

$(document).ready(function() {    
            $("#PARIS").click(function() {
                $("#paris_1_").css("display", "block");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#INSTA").click(function() {
                $("#insta").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MUMBAI").click(function() {
                $("#mumbai_1_").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#ABUDHABI").click(function() {
                $("#abudhabi").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#WORLDWIDE").click(function() {
                $("#worldwide_1_").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LIKESFORLIKESBACK").click(function() {
                $("#likesforlikesback").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FOLLOWFORLIKE").click(function() {
                $("#followforlike").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FOLLOWMEPLEASE").click(function() {
                $("#followmeplease").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#INDIA").click(function() {
                $("#India").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LIKERS").click(function() {
                $("#likers").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LIKER").click(function() {
                $("#liker").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#DAILYQUOTES").click(function() {
                $("#dailyquotes").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LIKESFORLIKES").click(function() {
                $("#likeforlikes").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#INEEDFOLLOWERS").click(function() {
                $("#needfollowers").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LIKES").click(function() {
                $("#likes").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LIKES4LIKES").click(function() {
                $("#like4likes_1_").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FRENCHBULLDOG").click(function() {
                $("#frenchbulldog").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#TICTOK").click(function() {
                $("#tictok").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#COMMERCE").click(function() {
                $("#commerce").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LIKELIKE").click(function() {
                $("#likelike").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LIKEFORFOLLOWERS").click(function() {
                $("#likeforfollowers").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FOLLOWFORFOLLOWBACK").click(function() {
                $("#followforfollowback_1_").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followback").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FOLLOWBACK").click(function() {
                $("#followback").css("display", "block");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
            });
});

/* famous people */

$(document).ready(function() {    
            $("#DANIELRADCLIFFEFANS").click(function() {
                $("#danielradcliffefans").css("display", "block");
                $("#kendalljenner").css("display", "none");
                $("#freenudes").css("display", "none");
                $("#mood_1_").css("display", "none");
                $("#sendnude").css("display", "none");
                $("#kanyewest").css("display", "none");
                $("#fuckmypussy").css("display", "none");
                $("#kimkardashian").css("display", "none");
                $("#harrypottermovies").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#KENDALLJENNER").click(function() {
                $("#kendalljenner").css("display", "block");
                $("#danielradcliffefans").css("display", "none");
                $("#freenudes").css("display", "none");
                $("#mood_1_").css("display", "none");
                $("#sendnude").css("display", "none");
                $("#kanyewest").css("display", "none");
                $("#fuckmypussy").css("display", "none");
                $("#kimkardashian").css("display", "none");
                $("#harrypottermovies").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FREENUDES").click(function() {
                $("#freenudes").css("display", "block");
                $("#danielradcliffefans").css("display", "none");
                $("#kendalljenner").css("display", "none");
                $("#mood_1_").css("display", "none");
                $("#sendnude").css("display", "none");
                $("#kanyewest").css("display", "none");
                $("#fuckmypussy").css("display", "none");
                $("#kimkardashian").css("display", "none");
                $("#harrypottermovies").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MOOD").click(function() {
                $("#mood_1_").css("display", "block");
                $("#danielradcliffefans").css("display", "none");
                $("#kendalljenner").css("display", "none");
                $("#freenudes").css("display", "none");
                $("#sendnude").css("display", "none");
                $("#kanyewest").css("display", "none");
                $("#fuckmypussy").css("display", "none");
                $("#kimkardashian").css("display", "none");
                $("#harrypottermovies").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#SENDNUDE").click(function() {
                $("#sendnude").css("display", "block");
                $("#danielradcliffefans").css("display", "none");
                $("#kendalljenner").css("display", "none");
                $("#freenudes").css("display", "none");
                $("#mood_1_").css("display", "none");
                $("#kanyewest").css("display", "none");
                $("#fuckmypussy").css("display", "none");
                $("#kimkardashian").css("display", "none");
                $("#harrypottermovies").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#KANYEWEST").click(function() {
                $("#kanyewest").css("display", "block");
                $("#danielradcliffefans").css("display", "none");
                $("#kendalljenner").css("display", "none");
                $("#freenudes").css("display", "none");
                $("#mood_1_").css("display", "none");
                $("#sendnude").css("display", "none");
                $("#fuckmypussy").css("display", "none");
                $("#kimkardashian").css("display", "none");
                $("#harrypottermovies").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FUCKMYPUSSY").click(function() {
                $("#fuckmypussy").css("display", "block");
                $("#danielradcliffefans").css("display", "none");
                $("#kendalljenner").css("display", "none");
                $("#freenudes").css("display", "none");
                $("#mood_1_").css("display", "none");
                $("#sendnude").css("display", "none");
                $("#kanyewest").css("display", "none");
                $("#kimkardashian").css("display", "none");
                $("#harrypottermovies").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#KIMKARDASHIAN").click(function() {
                $("#kimkardashian").css("display", "block");
                $("#danielradcliffefans").css("display", "none");
                $("#kendalljenner").css("display", "none");
                $("#freenudes").css("display", "none");
                $("#mood_1_").css("display", "none");
                $("#sendnude").css("display", "none");
                $("#kanyewest").css("display", "none");
                $("#fuckmypussy").css("display", "none");
                $("#harrypottermovies").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#HARRYPOTTERMOVIES").click(function() {
                $("#harrypottermovies").css("display", "block");
                $("#danielradcliffefans").css("display", "none");
                $("#kendalljenner").css("display", "none");
                $("#freenudes").css("display", "none");
                $("#mood_1_").css("display", "none");
                $("#sendnude").css("display", "none");
                $("#kanyewest").css("display", "none");
                $("#fuckmypussy").css("display", "none");
                $("#kimkardashian").css("display", "none");
            });
});

/* political meme */

$(document).ready(function() {    
            $("#FREE").click(function() {
                $("#free").css("display", "block");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#WINNER").click(function() {
                $("#winner").css("display", "block");
                $("#free").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#TRUMP").click(function() {
                $("#trump").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#PORN").click(function() {
                $("#porn").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#IMPEACHTRUMP").click(function() {
                $("#impeachtrump").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#OFFENSIVEMEMES").click(function() {
                $("#offensivememes").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#DANKMEMES").click(function() {
                $("#dankmemes").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#WIN").click(function() {
                $("#win").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#NEWS").click(function() {
                $("#news").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#LOTTERY").click(function() {
                $("#lottery").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#OBAMA").click(function() {
                $("#obama").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#MEME").click(function() {
                $("#meme_1_").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#ELECTION").click(function() {
                $("#election").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#JOKER").click(function() {
                $("#joker").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#FOLLOWME").click(function() {
                $("#followme").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#DOPEMEMES").click(function() {
                $("#dopememes").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#presidents").css("display", "none");
            });
});

$(document).ready(function() {    
            $("#PRESIDENTS").click(function() {
                $("#presidents").css("display", "block");
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
            });
});

/* BUTTON */

$(document).ready(function() {    
            $("#button").click(function() {
                $("#free").css("display", "none");
                $("#winner").css("display", "none");
                $("#trump").css("display", "none");
                $("#porn").css("display", "none");
                $("#impeachtrump").css("display", "none");
                $("#offensivememes").css("display", "none");
                $("#dankmemes").css("display", "none");
                $("#win").css("display", "none");
                $("#news").css("display", "none");
                $("#lottery").css("display", "none");
                $("#obama").css("display", "none");
                $("#meme_1_").css("display", "none");
                $("#election").css("display", "none");
                $("#joker").css("display", "none");
                $("#followme").css("display", "none");
                $("#dopememes").css("display", "none");
                $("#presidents").css("display", "none");
                $("#gaygeek").css("display", "none");
                $("#shirtlessmen").css("display", "none");
                $("#gaytwinks").css("display", "none");
                $("#cutegays").css("display", "none");
                $("#cuteboy").css("display", "none");
                $("#lgtbqia").css("display", "none");
                $("#prettyboys").css("display", "none");
                $("#shirtlessguys").css("display", "none");
                $("#tinkboy").css("display", "none");
                $("#gay").css("display", "none");
                $("#twinks").css("display", "none");
                $("#cuddletime").css("display", "none");
                $("#lgtbq").css("display", "none");
                $("#boyfriends").css("display", "none");
                $("#gayboyfriend_x5F_grassetto_1_").css("display", "none");
                $("#gaygeeks").css("display", "none");
                $("#gaymers").css("display", "none");
                $("#gayboyfriend").css("display", "none");
                $("#lgtb").css("display", "none");
                $("#freefirelocu").css("display", "none");
                $("#freefirenews").css("display", "none");
                $("#freefire").css("display", "none");
                $("#freestylerap").css("display", "none");
                $("#freefirememe").css("display", "none");
                $("#FREEFIREBGID").css("display", "none");
                $("#freefiregarena").css("display", "none");
                $("#freefiresquad").css("display", "none");
                $("#freefirehack").css("display", "none");
                $("#freefiregame").css("display", "none");
                $("#garenafreefire").css("display", "none");
                $("#freefireindonesia").css("display", "none");
                $("#freefire_x5F_update").css("display", "none");
                $("#freefirebooyaah").css("display", "none");
                $("#freefirekocahk").css("display", "none");
                $("#freefiregokil").css("display", "none");
                $("#freefire4all").css("display", "none");
                $("#freefirevideo").css("display", "none");
                $("#freefiremania").css("display", "none");
                $("#garenaofficial").css("display", "none");
                $("#freefirebucin").css("display", "none");
                $("#freefireindo").css("display", "none");
                $("#danielradcliffefans").css("display", "none");
                $("#kendalljenner").css("display", "none");
                $("#freenudes").css("display", "none");
                $("#mood_1_").css("display", "none");
                $("#sendnude").css("display", "none");
                $("#kanyewest").css("display", "none");
                $("#fuckmypussy").css("display", "none");
                $("#kimkardashian").css("display", "none");
                $("#harrypottermovies").css("display", "none");
                $("#paris_1_").css("display", "none");
                $("#insta").css("display", "none");
                $("#mumbai_1_").css("display", "none");
                $("#abudhabi").css("display", "none");
                $("#worldwide_1_").css("display", "none");
                $("#likesforlikesback").css("display", "none");
                $("#followforlike").css("display", "none");
                $("#followmeplease").css("display", "none");
                $("#India").css("display", "none");
                $("#likers").css("display", "none");
                $("#liker").css("display", "none");
                $("#dailyquotes").css("display", "none");
                $("#likeforlikes").css("display", "none");
                $("#needfollowers").css("display", "none");
                $("#likes").css("display", "none");
                $("#like4likes_1_").css("display", "none");
                $("#frenchbulldog").css("display", "none");
                $("#tictok").css("display", "none");
                $("#commerce").css("display", "none");
                $("#likelike").css("display", "none");
                $("#likeforfollowers").css("display", "none");
                $("#followforfollowback_1_").css("display", "none");
                $("#followback").css("display", "none");
                $("#spiritualwake").css("display", "none");
                $("#forward").css("display", "none");
                $("#survivor").css("display", "none");
                $("#leaders").css("display", "none");
                $("#soul").css("display", "none");
                $("#frequency").css("display", "none");
                $("#_x31_00daysofhappiness").css("display", "none");
                $("#goals").css("display", "none");
                $("#goodvibes").css("display", "none");
                $("#mindset").css("display", "none");
                $("#metoo").css("display", "none");
                $("#spirituallyawakened").css("display", "none");
                $("#inspirationalquotes").css("display", "none");
                $("#woman").css("display", "none");
                $("#nude").css("display", "none");
                $("#naked").css("display", "none");
                $("#bodies").css("display", "none");
                $("#enpower").css("display", "none");
                $("#womenenpowerment").css("display", "none");
                $("#enpoweringwomen").css("display", "none");
                $("#womanpower").css("display", "none");
                $("#mybodymychoise").css("display", "none");
                $("#nips").css("display", "none");
                $("#femalebody").css("display", "none");
                $("#bodypositive").css("display", "none");
                $("#womanbeauty").css("display", "none");
                $("#body_1_").css("display", "none");
                $("#womenpower_x5F_grassetto").css("display", "none");
                $("#bodypositvity").css("display", "none");
                $("#selfcare").css("display", "none");
                $("#selflove").css("display", "none");
                $("#breast_cancer").css("display", "none");
                $("#healing").css("display", "none");
                $("#cancer").css("display", "none");
                $("#breastcancerawarness").css("display", "none");
                $("#realistic").css("display", "none");
                $("#beautiful_woman").css("display", "none");
                $("#beautifulgirls_1_").css("display", "none");
                $("#proesthetics").css("display", "none");
                $("#silicone").css("display", "none");
                $("#natural").css("display", "none");
                $("#mastectomy").css("display", "none");
                $("#nippleprostethic").css("display", "none");
                $("#portraitphotograph").css("display", "none");
                $("#fashionblogger").css("display", "none");
                $("#photo").css("display", "none");
                $("#portrait").css("display", "none");
                $("#makeup").css("display", "none");
                $("#modellife").css("display", "none");
                $("#makeupartist").css("display", "none");
                $("#photoshoot").css("display", "none");
                $("#photographer").css("display", "none");
                $("#wakeupandmakeup").css("display", "none");
                $("#modeling").css("display", "none");
                $("#photomodel").css("display", "none");
                $("#fitnessgirl").css("display", "none");
                $("#instaart_x5F_painting").css("display", "none");
                $("#breastfeeding_x5F_breastmilk_x5F_breastfeedingmom").css("display", "none");
                $("#lovely").css("display", "none");
                $("#instababy").css("display", "none");
                $("#infant").css("display", "none");
                $("#adorable").css("display", "none");
                $("#children").css("display", "none");
                $("#family").css("display", "none");
                $("#kids").css("display", "none");
                $("#babyboy").css("display", "none");
                $("#young").css("display", "none");
                $("#small").css("display", "none");
                $("#childrenphoto").css("display", "none");
                $("#baby").css("display", "none");
                $("#son").css("display", "none");
                $("#babyblogger").css("display", "none");
                $("#little").css("display", "none");
                $("#babies").css("display", "none");
                $("#breastfeeding").css("display", "none");
            });
});

/* Caption and picture change */


$(document).ready(function() {    
            $("#US_x5F_area_51").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#1").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><strong>Area 51</strong><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_haarp").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#2").css("display", "block");
                $("#IMAGES").css("border-left", "0px");
                $("#IMAGES").css("border-right", "0px");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>HAARP Research Facility</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_camp_x5F_buckner").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#3").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Camp Buckner</b><br>United States ";
            });
});

$(document).ready(function() {    
            $("#US_x5F_fort_x5F_drum").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#4").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Fort Drum</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_aberdeen").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#5").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Aberdeen Proving Ground</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_michael_x5F_aaf").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#6").css("display", "block");
                $("#IMAGES").css("border-left", "0px");
                $("#IMAGES").css("border-right", "0px");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Michael Army Airfield</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_pave_x5F_paws").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#7").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>PAVE PAWS (air force space command radar system) </b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_tonopah_x5F_test_x5F_range").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#8").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Tonopah Test Range</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#Taiwan_x5F_general_x5F_command_x5F_airforce").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#9").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Air Force General Command</b><br>Taiwan";
            });
});

$(document).ready(function() {    
            $("#Taiwan_x5F_national_x5F_security_x5F_bureau").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#10").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>National Security Bureau Headquarter</b><br>Taiwan";
            });
});

$(document).ready(function() {    
            $("#Taiwan_x5F_military_x5F_logistic_x5F_command").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#11").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Army Logistics Command Headquarter</b><br>Taiwan";
            });
});

$(document).ready(function() {    
            $("#Afghanistan_x5F_camp_x5F_shoraback").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#12").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Camp Shorabak</b><br>Afghanistan";
            });
});

$(document).ready(function() {    
            $("#Belgium_x5F_BPO").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#13").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Belgian Pipeline Organization</b><br>Belgium";
            });
});

$(document).ready(function() {    
            $("#Belgium_x5F_Erguemin").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#14").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Erguemin (Belgium-Netherlands Naval Mine Warfare School) </b><br>Belgium";
            });
});

$(document).ready(function() {    
            $("#Belgium_x5F_Fort__x5F_eben").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#15").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Fort Eben-Emael</b><br>Belgium";
            });
});

$(document).ready(function() {    
            $("#France_x5F_cherbourg").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#16").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Cherbourg Naval Base</b><br>France";
            });
});

$(document).ready(function() {    
            $("#France_x5F_istres_x5F_le_x5F_tube").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#17").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Istres-Le Tubé Air Base</b><br>France";
            });
});

$(document).ready(function() {    
            $("#France_x5F_orange_x5F_caritat").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#18").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Orange-Caritat Air Base</b><br>France";
            });
});

$(document).ready(function() {    
            $("#France_x5F_toloun_x5F_arsenal").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#19").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Toulon arsenal</b><br>France";
            });
});

$(document).ready(function() {    
            $("#France_x5F_reims_x5F_airbase").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#20").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Reims-Champagne Air Base</b><br>France";
            });
});

$(document).ready(function() {    
            $("#France_x5F_HWU").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#21").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>HWU transmitter</b><br>France";
            });
});

$(document).ready(function() {    
            $("#France_x5F_velyzi").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#22").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Vélizy-Villacoublay Air Base</b><br>France";
            });
});

$(document).ready(function() {    
            $("#Germany_x5F_ingolstadt_x5F_military_x5F_airport").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#23").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Ingolstadt Manching Airport</b><br>Germany";
            });
});

$(document).ready(function() {    
            $("#Germany_x5F_nato_x5F_airbase").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#24").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>NATO Air Base Geilenkirchen</b><br>Germany";
            });
});

$(document).ready(function() {    
            $("#Germany_ramestain_airbase").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#25").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Ramstein Air Base</b><br>Germany";
            });
});

$(document).ready(function() {    
            $("#Greece_x5F_andravida").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#26").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Andravida Air Base</b><br>Greece";
            });
});

$(document).ready(function() {    
            $("#Greece_x5F_ayioi_x5F_anargyoi").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#27").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Military Factories Command</b><br>Greece";
            });
});

$(document).ready(function() {    
            $("#Poland_x5F_Dowodztwo_x5F_wojsk_x5F_specjalnych").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#28").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Special Troops Command</b><br>Poland";
            });
});

$(document).ready(function() {    
            $("#Poland_x5F_hydrometerologycal_x5F_station").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#29").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Military Hydrometeorological Command Centre</b><br>Poland";
            });
});

$(document).ready(function() {    
            $("#Portugal_x5F_nato_x5F_ammo_x5F_depot").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#30").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>NATO Ammo Depot</b><br>Portugal";
            });
});

$(document).ready(function() {    
            $("#Portugal_x5F_nato_x5F_base_x5F_joint_x5F_command").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#31").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>NATO Base Joint Command</b><br>Portugal";
            });
});

$(document).ready(function() {    
            $("#Spain_x5F_rosas_x5F_airstation").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#32").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Rosas Air Station</b><br>Spain";
            });
});

$(document).ready(function() {    
            $("#Spain_x5F_army_x5F_command_x5F_signal").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#33").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Army Command Signals</b><br>Spain";
            });
});

$(document).ready(function() {    
            $("#Spain_x5F_strategical_x5F_signal").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#34").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Strategic Signals Regiment number 22</b><br>Spain";
            });
});

$(document).ready(function() {    
            $("#Netherlands_x5F_nato_x5F_c3").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#35").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>NATO C3 Agency</b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#Netherlands_x5F_tank_x5F_manufacturer").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#36").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Personeelsvereniging Tankwerkplaats (tank manufacture) </b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#Netherlands_x5F_volkel").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#37").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Volkel Air Base</b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#Pakistan_x5F_shamsi").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#38").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Shamsi airfield</b><br>Pakistan";
            });
});

$(document).ready(function() {    
            $("#france_x5F_marcoule").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#77").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Marcoule Nuclear Site</b><br>France ";
            });
});

$(document).ready(function() {    
            $("#france_x5F_AREVA").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#78").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>AREVA La Hague</b><br>France ";
            });
});

$(document).ready(function() {    
            $("#US_x5F_india_x5F_power_x5F_point").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#79").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Indian Point Energy Center</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_seabrooke").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#80").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Seabrook Station</b><br>United States ";
            });
});

$(document).ready(function() {    
            $("#US_x5F_knolls_x5F_Atomic").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#54").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Knolls Atomic Power Laboratory and General Electric global research center</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_buffalo_x5F_niagara").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#55").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Buffalo Niagara International Airport</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_elmira").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#56").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Elmira Correctional Facility</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_mobile_x5F_oil_x5F_corporation").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#57").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>A Mobil Oil Corporation facility</b><br>United States ";
            });
});

$(document).ready(function() {    
            $("#US_x5F_syracuse_x5F__airport").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#58").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Syracuse Hancock International Airport</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_cornell_x5F_university").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#59").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Cornell University</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_auburn").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#60").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Auburn Correctional Facility</b><br>United States ";
            });
});

$(document).ready(function() {    
            $("#Us_x5F_keowee_x5F_dam").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#61").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Keowee Dam</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#Japan_x5F_minami_x5F_torishima").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#62").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Minami Torishima airport</b><br>Japan";
            });
});

$(document).ready(function() {    
            $("#France_x5F_Baumette").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#63").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Baumettes Penitentiary</b><br>France";
            });
});

$(document).ready(function() {    
            $("#France_x5F_saint_x5F_queintin").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#64").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Saint-Quentin-Fallavier Penitentiary Centre</b><br>France";
            });
});

$(document).ready(function() {    
            $("#France_x5F_riom").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#65").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Riom Prison</b><br> France";
            });
});

$(document).ready(function() {    
            $("#Greece_x5F_kephalonia_x5F_airport").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#66").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Kephalonia International Airport</b><br>Greece";
            });
});

$(document).ready(function() {    
            $("#Greece_x5F_thessaloniki_x5F_aiport").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#67").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Thessaloniki Airport Macedonia</b><br>Greece";
            });
});

$(document).ready(function() {    
            $("#Greece_x5F_unknown_x5F_kos").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#68").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Unknown site near Kos International Airport</b><br>Greece";
            });
});

$(document).ready(function() {    
            $("#Hungary_x5F_szahalombatta").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#69").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Százhalombatta Oil Refinery</b><br>Hungary";
            });
});

$(document).ready(function() {    
            $("#Hungary_x5F_martonvasar").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#70").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Martonvásár Substation</b><br>Hungary ";
            });
});

$(document).ready(function() {    
            $("#Ireland_x5F_Portlaoise").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#71").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Portlaoise Prison and Irish Prison Service Training College</b><br>Ireland";
            });
});

$(document).ready(function() {    
            $("#Netherlands_x5F_private_x5F_house").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#72").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>A private house</b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#Russia_x5F_Alexey_x5F_house").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#73").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Alexey Miller’s house</b><br>Russia";
            });
});

$(document).ready(function() {    
            $("#Slovakia_x5F_Gabcikovo").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#74").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Gabčíkovo Hydroelectric Power Plant</b><br>Slovakia";
            });
});

$(document).ready(function() {    
            $("#Spain_x5F_missile_x5F_silo").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#75").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>A greenhouse</b><br>El Ejido Spain";
            });
});

$(document).ready(function() {    
            $("#Spian_x5F_malaga_x5F_airport").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#76").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Malaga Airport</b><br>Spain";
            });
});

$(document).ready(function() {    
            $("#France_x5F_caradache_x5F_center").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#88").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Caradache center (research office of atomic energy) </b><br>France";
            });
});

$(document).ready(function() {    
            $("#Belgium_x5F_westflanders").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#89").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>West Flanders office</b><br>Belgium";
            });
});

$(document).ready(function() {    
            $("#US_x5F_capitol_x5F_building").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#90").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Capitol Building</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_One_x5F_observatory_x5F_circle").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#91").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>One observatory circle (vice-president’s house) </b><br>United States";
            });
});

$(document).ready(function() {    
            $("#US_x5F_white_x5F_house").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#92").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>White House</b><br>United States ";
            });
});

$(document).ready(function() {    
            $("#Netherland_x5F_noordeine_x5F_palace").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#93").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Noordeinde Palace</b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#Netherland_x5F_huis_x5F_ten_x5F_bosh").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#94").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Huis ten Bosch palace</b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#Netherland_x5F_koninklijk_x5F_palace").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#95").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Koninklijk palace</b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#Portugal_x5F_ministero_x5F_da_x5F_difesa_x5F_nacional").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#96").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Ministry of National Defence</b><br>Portugal";
            });
});

$(document).ready(function() {    
            $("#US_x5F_Mazda_x5F_raceway").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#39").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Mazda Raceway Laguna Seca</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#israel_x5F_country").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#40").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Israel</b>";
            });
});

$(document).ready(function() {    
            $("#israel_x5F_tel-aviv").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#41").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Tel Aviv</b><br>Israel ";
            });
});

$(document).ready(function() {    
            $("#North_x5F_Korea_x5F_country").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#42").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>North Korea</b>";
            });
});

$(document).ready(function() {    
            $("#France_x5F_moronvilliers").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#43").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Moronvilliers (village) </b><br>France";
            });
});

$(document).ready(function() {    
            $("#France_x5F_vauban").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#44").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Vauban Saint-Martin-de-Rè Fortifications</b><br>France";
            });
});

$(document).ready(function() {    
            $("#Greece_x5F_Emporio").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#45").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Unknown area near Emporio (Santorini) </b><br>Greece ";
            });
});

$(document).ready(function() {    
            $("#Russia_x5F_Chekov").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#46").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Chekhov (city) </b><br>Russia";
            });
});

$(document).ready(function() {    
            $("#Spain_x5F_patio_x5F_de_x5F_los_x5F_naranjos").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#47").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Orange tree courtyard</b><br>Spain ";
            });
});

$(document).ready(function() {    
            $("#Spain_x5F_rosas_x5F_girona").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#48").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Roses (municipality in Girona) </b><br>Spain ";
            });
});

$(document).ready(function() {    
            $("#Spain_x5F_girona").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#49").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Girona</b><br>Spain ";
            });
});

$(document).ready(function() {    
            $("#Philippine_x5F_valencia").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#50").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Valencia City</b><br>Philippines ";
            });
});

$(document).ready(function() {    
            $("#Netherlands_x5F_oorsprongpark").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#51").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Oorsprongpark 8 at 3581 ET Utrecht</b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#netherland_x5F_vissingen").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#52").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Vlissingen (city) </b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#Netherlands_x5F_noordwijkaanzee").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#53").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Noordwijk aan Zee (city) </b><br>Netherlands";
            });
});

$(document).ready(function() {    
            $("#Canada_x5F_baker_x5F_lake").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#81").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Baker Lake</b><br>Canada";
            });
});

$(document).ready(function() {    
            $("#Chile_x5F_tantauco_x5F_park").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#82").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Tantauco National Park</b><br>Chile ";
            });
});

$(document).ready(function() {    
            $("#US_x5F_oregon").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#83").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Unknown area in Oregon</b><br>United States";
            });
});

$(document).ready(function() {    
            $("#Antarctica").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#84").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>A glacier</b><br>Antarctica ";
            });
});

$(document).ready(function() {    
            $("#China_x5F_mapam_x5F_Yumco").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#85").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Mapam Yumco Lake</b><br>China";
            });
});

$(document).ready(function() {    
            $("#Iraq_x5F_razzaza_x5F_lake").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#86").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Razzaza Lake</b><br>Iraq";
            });
});

$(document).ready(function() {    
            $("#Nepal_x5F_snow_x5F_saddle").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#87").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Snow Saddle (mountain peak) </b><br>Nepal ";
            });
});

$(document).ready(function() {    
            $("#Mexico_x5F_campeche_x5F_bank").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#97").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Western Campeche Bank islands</b><br>Mexico";
            });
});

$(document).ready(function() {    
            $("#UK_x5F_south_x5F_sandwitch_x5F_islands").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#98").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>South Sandwich islands</b><br>United Kingdom ";
            });
});

$(document).ready(function() {    
            $("#China_x5F_taiping").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#99").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Taiping island</b><br>China ";
            });
});

$(document).ready(function() {    
            $("#India_x5F_north_x5F_sentinel").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#100").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>North Sentinel island</b><br>India";
            });
});

$(document).ready(function() {    
            $("#Denmark_x5F_faroe").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#101").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Farøe islands</b><br>Denmark";
            });
});

$(document).ready(function() {    
            $("#Russia_x5F_Janette").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#102").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Jeanette island</b><br>Russia";
            });
});

$(document).ready(function() {    
            $("#Russia_x5F_Savarenya").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#103").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Severnaya Zemlya archipelago</b><br>Russia";
            });
});

$(document).ready(function() {    
            $("#French_x5F_polynesia_x5F_atoll_x5F_moruroa").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#104").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Mururoa atoll</b><br>French Polynesia";
            });
});

$(document).ready(function() {    
            $("#Greece_x5F_moria_x5F_camp").click(function() {
                $("#IMAGES img").css("display", "none");
                $("#105").css("display", "block");
                $("#IMAGES").css("border-left", "1px solid #7c7c7c");
                $("#IMAGES").css("border-right", "1px solid #7c7c7c");
                var element = document.getElementById("CAPTION");
                element.innerHTML = "<br><br><b>Moria Camp</b><br>Greece ";
            });
});

/* Human moderators visualization 1 */

$(document).ready(function() {    
            $("#Areas g").hover(function() {
                $("#Areas g").not("#Legend").css("opacity", 0.1);
                $(this).css("opacity", 1);
            }, function() {
                $("#Areas g").css("opacity", 1);
            });
});

/* Human moderators visualization 2 */

$(document).ready(function() {    
            $("#recruitment_2_").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Recruitment").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#callcenter").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Call_Center").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#onlineservices").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Online_services").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#brandprotection").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Brand_protection").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#unknown_2_").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Unknown").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#education").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Education").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#education_2_").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Education").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});


$(document).ready(function() {    
            $("#onlineservices").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Online_services").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#mediacontent").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Media_content").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#technology_2_").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Technology").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#travel_2_").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Travel").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#socialmedia").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Social_Media").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#marketing_2_").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Marketing").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#data_2_").hover(function() {
                $("#languages g").css("display", "none");
                $("#fields g").css("display", "block");
                $("#fields g").not("#Data").css("opacity", "0.1");
            }, function() {
                $("#fields g").css("opacity", "1");
                $("#fields g").css("display", "none");
                $("#languages g").css("display", "block");
            });
});

$(document).ready(function() {    
            $("#languages g").hover(function() {
                $("#languages g").css("opacity", 0.1);
                $(this).css("opacity", 1);
            }, function() {
                $("#languages g").css("opacity", 1);
            });
});

/* Fine art visualization */

$(document).ready(function() {    
            $("#NRA_x5F_svetlana_x5F_sokpòpvskaya").click(function() {
                $("#Info_x5F_NRA_x5F_svetlana_x5F_sokpòpvskaya").css("display", "block");
                /* $(this).css("opacity", 0.5); */
                $("#INFO g").not("#Info_x5F_NRA_x5F_svetlana_x5F_sokpòpvskaya").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Scorched_x5F_wings").click(function() {
                $("#Info_x5F_scorched_x5F_wings").css("display", "block");
                $("#INFO g").not("#Info_x5F_scorched_x5F_wings").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#U_x5F_betty_x5F_tompkins").click(function() {
                $("#Info_x5F_U_x5F_betty_x5F_tompkins").css("display", "block");
                $("#INFO g").not("#Info_x5F_U_x5F_betty_x5F_tompkins").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#_x31_00_x5F_muses").click(function() {
                $("#Info_x5F_100_x5F_muses").css("display", "block");
                $("#INFO g").not("#Info_x5F_100_x5F_muses").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#NRA_x5F_Alphachanneling").click(function() {
                $("#Info_x5F_NRA_x5F_alphachanneling").css("display", "block");
                $("#INFO g").not("#Info_x5F_NRA_x5F_alphachanneling").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#U_x5F_savannah_x5F_spirit").click(function() {
                $("#Info_x5F_U_x5F_savannah_x5F_spirit").css("display", "block");
                $("#INFO g").not("#Info_x5F_U_x5F_savannah_x5F_spirit").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Sunbath").click(function() {
                $("#Info_x5F_sunbath").css("display", "block");
                $("#INFO g").not("#Info_x5F_sunbath").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#A_x5F_model").click(function() {
                $("#Info_x5F_a_x5F_model").css("display", "block");
                $("#INFO g").not("#Info_x5F_a_x5F_model").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#U_x5F_Kit_King").click(function() {
                $("#Info_x5F_U_x5F_kit_x5F_king").css("display", "block");
                $("#INFO g").not("#Info_x5F_U_x5F_kit_x5F_king").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Theljilja").click(function() {
                $("#Info_x5F_theljilja").css("display", "block");
                $("#INFO g").not("#Info_x5F_theljilja").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#U_x5F_clotilde_x5F_petrosino").click(function() {
                $("#Info_x5F_U_x5F_clotilde_x5F_petrosino").css("display", "block");
                $("#INFO g").not("#Info_x5F_U_x5F_clotilde_x5F_petrosino").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#U_x5F_mochi_x5F_agogo").click(function() {
                $("#Info_x5F_U_x5F_kit_x5F_king").css("display", "block");
                $("#INFO g").not("#Info_x5F_U_x5F_kit_x5F_king").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Charlotte").click(function() {
                $("#Info_x5F_charlotte").css("display", "block");
                $("#INFO g").not("#Info_x5F_charlotte").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Triangles").click(function() {
                $("#Info_x5F_triangles").css("display", "block");
                $("#INFO g").not("#Info_x5F_triangles").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Wrestling_x5F_hornby_x5F_island").click(function() {
                $("#Info_x5F_wrestling_x5F_hornby_x5F_island").css("display", "block");
                $("#INFO g").not("#Info_x5F_wrestling_x5F_hornby_x5F_island").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Freeing_x5F_the_x5F_body").click(function() {
                $("#Info_x5F_freeing_x5F_the_x5F_body").css("display", "block");
                $("#INFO g").not("#Info_x5F_freeing_x5F_the_x5F_body").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Glitterotica").click(function() {
                $("#Info_x5F_glitterotica").css("display", "block");
                $("#INFO g").not("#Info_x5F_glitterotica").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Fuck_x5F_painting_x5F_1").click(function() {
                $("#Info_x5F_fuck_x5F_painting_x5F_1").css("display", "block");
                $("#INFO g").not("#Info_x5F_fuck_x5F_painting_x5F_1").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Imogen_x5F_and_x5F_twinka").click(function() {
                $("#Info_x5F_imogen_x5F_and_x5F_twinka").css("display", "block");
                $("#INFO g").not("#Info_x5F_imogen_x5F_and_x5F_twinka").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#U_x5F_Alexandra_Marzella").click(function() {
                $("#Info_x5F_U_x5F_alexandra_x5F_marzella").css("display", "block");
                $("#INFO g").not("#Info_x5F_U_x5F_alexandra_x5F_marzella").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#NRA_x5F_daniel_x5F_maidman").click(function() {
                $("#Info_x5F_NRA_x5F_daniel_x5F_maidman").css("display", "block");
                $("#INFO g").not("#Info_x5F_NRA_x5F_daniel_x5F_maidman").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Bore").click(function() {
                $("#Info_x5F_bore").css("display", "block");
                $("#INFO g").not("#Info_x5F_bore").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#NRA_x5F_johanne_x5F_leah").click(function() {
                $("#Info_x5F_NRA_x5F_johanne_x5F_leah").css("display", "block");
                $("#INFO g").not("#Info_x5F_NRA_x5F_johanne_x5F_leah").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Mammography").click(function() {
                $("#Info_x5F_mammography").css("display", "block");
                $("#INFO g").not("#Info_x5F_mammography").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Northview").click(function() {
                $("#Info_x5F_northview").css("display", "block");
                $("#INFO g").not("#Info_x5F_northview").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#U_x5F_petra_x5F_collins").click(function() {
                $("#Info_x5F_U_x5F_petra_x5F_collins").css("display", "block");
                $("#INFO g").not("#Info_x5F_U_x5F_petra_x5F_collins").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#U_x5F_rachel_x5F_libeskind").click(function() {
                $("#Info_x5F_U_x5F_rachel_x5F_libeskind").css("display", "block");
                $("#INFO g").not("#Info_x5F_U_x5F_rachel_x5F_libeskind").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Portugal_x5F_2003").click(function() {
                $("#Info_x5F_Portugal_x5F_2003").css("display", "block");
                $("#INFO g").not("#Info_x5F_Portugal_x5F_2003").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Self_x5F_portrait_x5F_with_x5F_sculpture").click(function() {
                $("#Info_x5F_self_x5F_portrait_x5F_with_x5F_sculpture").css("display", "block");
                $("#INFO g").not("#Info_x5F_self_x5F_portrait_x5F_with_x5F_sculpture").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Woman_x5F_as_x5F_object").click(function() {
                $("#Info_x5F_woman_x5F_as_x5F_object").css("display", "block");
                $("#INFO g").not("#Info_x5F_woman_x5F_as_x5F_object").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Are_x5F_they_x5F_really_x5F_prolife").click(function() {
                $("#Info_x5F_are_x5F_they_x5F_really_x5F_prolife").css("display", "block");
                $("#INFO g").not("#Info_x5F_are_x5F_they_x5F_really_x5F_prolife").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Women_x5F_lovers").click(function() {
                $("#Info_x5F_women_x5F_lovers").css("display", "block");
                $("#INFO g").not("#Info_x5F_women_x5F_lovers").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#U_x5F_clarity_x5F_haynes").click(function() {
                $("#Info_x5F_u_x5F_clarity_x5F_haynes").css("display", "block");
                $("#INFO g").not("#Info_x5F_u_x5F_clarity_x5F_haynes").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#NRA_x5F_eliseo_x5F_solis_x5F_mora").click(function() {
                $("#Info_x5F_NRA_x5F_eliseo_x5F_solis_x5F_mora").css("display", "block");
                $("#INFO g").not("#Info_x5F_NRA_x5F_eliseo_x5F_solis_x5F_mora").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#NRA_x5F_erika_x5F_ordosgoitti").click(function() {
                $("#Info_x5F_NRA_x5F_erika_x5F_ordosgoitti").css("display", "block");
                $("#INFO g").not("#Info_x5F_NRA_x5F_erika_x5F_ordosgoitti").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Autocorpo").click(function() {
                $("#Info_x5F_autocorpo").css("display", "block");
                $("#INFO g").not("#Info_x5F_autocorpo").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Breast_x5F_cancer_x5F_awareness_x5F_body_x5F_painting").click(function() {
                $("#Info_x5F_breast_x5F_cancer_x5F_awareness_x5F_body_x5F_painting").css("display", "block");
                $("#INFO g").not("#Info_x5F_breast_x5F_cancer_x5F_awareness_x5F_body_x5F_painting").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#NRA_x5F_reuben_x5F_negron").click(function() {
                $("#Info_x5F_NRA_x5F_reuben_x5F_negron").css("display", "block");
                $("#INFO g").not("#Info_x5F_NRA_x5F_reuben_x5F_negron").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#The_x5F_little_x5F_mermaid").click(function() {
                $("#Info_x5F_the_x5F_little_x5F_mermaid").css("display", "block");
                $("#INFO g").not("#Info_x5F_the_x5F_little_x5F_mermaid").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Women_x5F_at_x5F_their_x5F_toilet").click(function() {
                $("#Info_x5F_women_x5F_at_x5F_their_x5F_toilette").css("display", "block");
                $("#INFO g").not("#Info_x5F_women_x5F_at_x5F_their_x5F_toilette").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Nude_x5F_227N").click(function() {
                $("#Info_x5F_nude_x5F_227N").css("display", "block");
                $("#INFO g").not("#Info_x5F_nude_x5F_227N").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Ema").click(function() {
                $("#Info_x5F_ema").css("display", "block");
                $("#INFO g").not("#Info_x5F_ema").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#The_x5F_napalm_x5F_girl").click(function() {
                $("#Info_x5F_the_x5F_napalm_x5F_girl").css("display", "block");
                $("#INFO g").not("#Info_x5F_the_x5F_napalm_x5F_girl").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Ice_x5F_cream").click(function() {
                $("#Info_x5F_ice_x5F_cream").css("display", "block");
                $("#INFO g").not("#Info_x5F_ice_x5F_cream").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Make_x5F_america_x5F_great_x5F_again").click(function() {
                $("#Info_x5F_make_x5F_america_x5F_great_x5F_again").css("display", "block");
                $("#INFO g").not("#Info_x5F_make_x5F_america_x5F_great_x5F_again").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#The_x5F_origin_x5F_of_x5F_the_x5F_world").click(function() {
                $("#Info_x5F_the_x5F_origin_x5F_of_x5F_the_x5F_world").css("display", "block");
                $("#INFO g").not("#Info_x5F_the_x5F_origin_x5F_of_x5F_the_x5F_world").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Venus_x5F_of_x5F_Willendorf").click(function() {
                $("#Info_x5F_venus_x5F_of_x5F_Willendorf").css("display", "block");
                $("#INFO g").not("#Info_x5F_venus_x5F_of_x5F_Willendorf").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#NRA_x5F_anders_x5F_zorn").click(function() {
                $("#Info_x5F_NRA_x5F_anders_x5F_zorn").css("display", "block");
                $("#INFO g").not("#Info_x5F_NRA_x5F_anders_x5F_zorn").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Hellmouth").click(function() {
                $("#Info_x5F_hellmouth").css("display", "block");
                $("#INFO g").not("#Info_x5F_hellmouth").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#The_x5F_descent_x5F_from_x5F_the_x5F_cross").click(function() {
                $("#Info_x5F_the_x5F_descent_x5F_from_x5F_the_x5F_cross").css("display", "block");
                $("#INFO g").not("#Info_x5F_the_x5F_descent_x5F_from_x5F_the_x5F_cross").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Reclining_x5F_nude").click(function() {
                $("#Info_x5F_reclining_x5F_nude").css("display", "block");
                $("#INFO g").not("#Info_x5F_reclining_x5F_nude").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Neptune_x5F_fountain").click(function() {
                $("#Info_x5F_neptune_x5F_fountain").css("display", "block");
                $("#INFO g").not("#Info_x5F_neptune_x5F_fountain").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Study_x5F_of_x5F_the_x5F_right_x5F_hand").click(function() {
                $("#Info_x5F_study_x5F_of_x5F_the_x5F_right_x5F_hand").css("display", "block");
                $("#INFO g").not("#Info_x5F_study_x5F_of_x5F_the_x5F_right_x5F_hand").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Reclining_x5F_nude").click(function() {
                $("#Info_x5F_reclining_x5F_nude").css("display", "block");
                $("#INFO g").not("#Info_x5F_reclining_x5F_nude").css("display", "none");
            });
    });

$(document).ready(function() {    
            $("#Amor_x5F_vincit_x5F_omnia").click(function() {
                $("#Info_x5F_amor_x5F_vincit_x5F_omnia").css("display", "block");
                $("#INFO g").not("#Info_x5F_amor_x5F_vincit_x5F_omnia").css("display", "none");
            });
    });