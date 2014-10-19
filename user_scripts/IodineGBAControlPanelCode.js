"use strict";
/*
 * This file is part of IodineGBA
 *
 * Copyright (C) 2012-2013 Grant Galitz
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */
$(document).ready(function(){
  $('button#toggle').click(function() {
    if($('div#control_panel').css("display") == "none")
      showControlPanel();
    else
      hideControlPanel();
  });
  
  $("button#play").click(function() {
    hideControlPanel();
  });
  
  $("#main").click(function() {
    if(!Iodine.paused)
      hideControlPanel();
  });
  
  function showControlPanel() {
    $("button#toggle").animate({'marginLeft' : "0px"}, 200);
    $("button#toggle").text("<");
    $("div#main").animate({'marginLeft' : "0px"}, 200);
    $('div#control_panel').show("fast");
  }
  
  function hideControlPanel() {
    $("div#main").animate({'marginLeft' : "-" + $("div#main").css("left")}, 200);
    $("button#toggle").animate({'marginLeft' : "-" + $("button#toggle").css("left")}, 200);
    $("button#toggle").text(">");
    $('div#control_panel').hide("fast");
  }
});