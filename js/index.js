
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        $(document).ready(function() {
    $.event.special.tap.emitTapOnTaphold = false;
    
    //Remove on mobile app
    if (window.location.hash != "") {
    	window.location.hash = '';
    	window.location.reload(true);
    }
    //*
    
    var host = "192.168.1.106/cdi_app2/";
    var array_Criteria = [{
        Module: "Module 1",
        ID: '0',
        Title: "Vertical Alignment",
        Criterion: "Our organisation’s vision, values and goals are shared and supported by the team. Every member knows what the SQSCP goals and key challenges of the organisation are and understand how they support these. The team has a system in place to recognize and reinforce the values in the team. ",
        Feedback: [{
            Title: "Vision",
            Standard: [""]
        }, {
            Title: "Values",
            Standard: [""]
        }, {
            Title: "Goals",
            Standard: [""]
        }]
    }, {
        Module: "Module 1",
        ID: '1',
        Title: "Identity & Horizontal Alignment",
        Criterion: "The team functions like an MBU. A team name and purpose are defined and a well-equipped MBU facility is in place. Customers and suppliers are treated as partners, Partnership Agreements are defined and performance is reviewed to improve value stream performance. Customer complaints or supplier issues are treated as triggers for problem solving. ",
        Feedback: [{
            Title: "Team Name",
            Standard: [""]
        }, {
            Title: "Team Purpose",
            Standard: [""]
        }, {
            Title: "MBU Facility",
            Standard: [""]
        }, {
            Title: "Customers/Suppliers",
            Standard: [""]
        }, {
            Title: "Partnership Agreements",
            Standard: [""]
        }]
    }, {
        Module: "Module 1",
        ID: '2',
        Title: "Meeting",
        Criterion: "The team meets daily during a structured 8-minute meeting to ensure clarity regarding work planned, review progress, highlight priorities and identify improvement opportunities. Issues that cannot be resolved at Level 1 are visually escalated to Level 2 for support. The coach actively supports and coaches the team during MBU meetings. ",
        Feedback: [{
            Title: "Duration/Flow",
            Standard: [""]
        }, {
            Title: "Structure/Facilitation",
            Standard: [""]
        }, {
            Title: "Escalation",
            Standard: [""]
        }, {
            Title: "Coach Support",
            Standard: [""]
        }]
    }, {
        Module: "Module 1",
        ID: '3',
        Title: "Performance Goals",
        Criterion: "The team, the leader and the coach agree on a balanced set of QUALITY, SPEED and COST-effectiveness measures, goals and triggers for the team. These enable the team to assess if their work was performed right the first time, on time and cost-effectively. Visual management highlights issues requiring further action or investigation by the team. ",
        Feedback: [{
            Title: "Measures",
            Standard: [""]
        }, {
            Title: "Goals",
            Standard: [""]
        }, {
            Title: "Triggers",
            Standard: [""]
        }, {
            Title: "Visual Management",
            Standard: [""]
        }]
    }, {
        Module: "Module 1",
        ID: '4',
        Title: "People & Safety Culture",
        Criterion: "A SAFETY culture exists in the team, the team actively identifies opportunities and implements improvement ideas to make work easier and safer. Hazards, near misses and unsafe acts are identified with the aim to make work safer by addressing root causes. PEOPLE performance is also visually managed by the team. ",
        Feedback: [{
            Title: "Hazards",
            Standard: [""]
        }, {
            Title: "Improvements",
            Standard: [""]
        }, {
            Title: "People",
            Standard: [""]
        }]
    }, {
        Module: "Module 1",
        ID: '5',
        Title: "Problem Solving",
        Criterion: "Whenever a trigger is activated, the team embarks on 3Q problem solving. Formal problem solving ensures the root cause(s) are identified and preventative action is taken by implementing changes to processes, procedures, work instructions, standards or the workplace. ",
        Feedback: [{
            Title: "Triggers",
            Standard: [""]
        }, {
            Title: "Q1",
            Standard: [""]
        }, {
            Title: "Q2",
            Standard: [""]
        }, {
            Title: "Q3",
            Standard: [""]
        }]
    }, {
        Module: "Module 1",
        ID: '6',
        Title: "Continuous Improvement",
        Criterion: "The talent of every member is engaged In the team, a culture of continuous improvement exists and every member actively explores and contributes ideas to improve the team’s practices and performance applying the PDCA cycle. Weekly feedback is received on any improvement ideas raised to Level 2. ",
        Feedback: [{
            Title: "Involvement",
            Standard: [""]
        }, {
            Title: "Trigger Conversion",
            Standard: [""]
        }, {
            Title: "PDCA",
            Standard: [""]
        }, {
            Title: "Feedback",
            Standard: [""]
        }]
    }, {
        Module: "Module 1",
        ID: '7',
        Title: "Next Steps",
        Criterion: "Next Steps with due dates and responsible persons are visually managed by the MBU. All members contribute to the successful completion of next steps. A commitment to actions and dates is demonstrated, due dates are almost never postponed. ",
        Feedback: [{
            Title: "Before Meeting",
            Standard: [""]
        }, {
            Title: "During Meeting",
            Standard: [""]
        }, {
            Title: "Who/When/Status",
            Standard: [""]
        }]
    }, {
        Module: "Module 1",
        ID: '8',
        Title: "Coaching Reviews",
        Criterion: "Monthly Coaching Reviews are conducted by the Coach to provide support, review progress and agree improvement actions. The outcome of each coaching review is visually managed. Coaching Reviews are never delayed. ",
        Feedback: [{
            Title: "CR Schedule",
            Standard: [""]
        }, {
            Title: "CR Feedback",
            Standard: [""]
        }, {
            Title: "Visual Management",
            Standard: [""]
        }]
    }, {
        Module: "Module 1",
        ID: '9',
        Title: "Recognition and Development",
        Criterion: "The team leader provides feedback on the MBUs’ performance and their best improvement(s) during monthly Multi-Level Meetings. Learning is shared with all team members, success is recognized and celebrated. Every six months a Team Performance Review takes place to recognize performance, realign goals and identify support requirements. ",
        Feedback: [{
            Title: "MLM Schedule",
            Standard: [""]
        }, {
            Title: "MLM Feedback",
            Standard: [""]
        }, {
            Title: "TP Review",
            Standard: [""]
        }]
    }];
    var feedback_stan = {
        "Used": ["Standard Feedback 1", "Standard Feedback 2", "Standard Feedback 3"],
        "Feedback": ["Standard Feedback 4", "Standard Feedback 5", "Standard Feedback 6"]
    };
    //get data
    /*jQuery.ajaxSetup({async:false, contentType: "application/x-www-form-urlencoded;charset=UTF-8"});
    object0 = {"Fieldnames": null, "Values":null, "table_name": null, "action":"tables_user_all"};
    $.post(
    host+"index.php",
    object0,
    function(data,status){
        var array_company_data = jQuery.parseJSON(data);
        if (array_company_data.results != 0) {
    	    for (var i = 0; i <array_company_data.length; i++) {
    			$("#team_criteria_team_c").append("<option value='"+array_company_data[i].Team_ID+"'>"+array_company_data[i].Name +"</option>");
    	    }
        } else {
            console.log("No teams");
        }
    });
    jQuery.ajaxSetup({async:true, contentType: "application/x-www-form-urlencoded;charset=UTF-8"});*/
    var login_obj_keep = {};
    var dates = [];
    var data_t = "";
    var now_date = "";
    var feedback_str = [];
    var strdates = [];
    var saved_data = [];
    var current_date;
    var scroll_finnish = false;
    var array_Criteria_counter = 0;
    var array_Criteria_counter0 = 0;
    var date_sort_asc = function(date1, date2) {
        if (date1 > date2) return 1;
        if (date1 < date2) return -1;
        return 0;
    };
    var database = new localStorageDB("cdi_history_database", localStorage);
    if (database.isNew()) {

        database.createTable("cdi_history", ["Team", "date", "Title", "value", "Feedback"]);
        database.createTable("cdi_history_feedback", ["Feedback", "title", "feedback_ans"]);

        database.commit();
    } else {

    }
    var cpm_dates = function(dates0, dates1) {
        var dates0_arr = dates0.date.split('-');
        var dates1_arr = dates1.date.split('-');
        var date001 = new Date(dates0_arr[0] + '/' + dates0_arr[1] + '/' + dates0_arr[2]);
        var date002 = new Date(dates1_arr[0] + '/' + dates1_arr[1] + '/' + dates1_arr[2]);
        if (date001 > date002) return 1;
        if (date001 < date002) return -1;
        return 0;
    };

    function insert_table1(object001) {
        database.insert("cdi_history", object001);
        database.commit();
    }

    function insert_table2(object002) {
        database.insert("cdi_history_feedback", object002);
        database.commit();
    }

    function count_table1() {
        return database.rowCount("cdi_history");
    }

    function count_table2() {
        return database.rowCount("cdi_history_feedback")
    }

    function create_obj() {
        var object_create = {
            Team: $('#team_name').text(),
            date: dateToString(new Date()),
            Title: $("#div_title").text(),
            value: $("#change_enable").html(),
            Feedback: feedback_str
        };
        now_date = dateToString(new Date());
        return object_create;
    }

    function queryall_table1() {
        return database.queryAll("cdi_history");
    }

    function queryall_table2(object_query) {
        return database.queryAll("cdi_history_feedback", object_query);
    }

    function saved_data_load_storage() {
        var cdi_history001 = queryall_table1();
        var cdi_history002;
        var feedback_str_history = [];
        var i;
        var j;
        //alert(JSON.stringify(queryall_table1()));
        for (i = 0; i < cdi_history001.length; i++) {
            var object_histroy = {
                Team: cdi_history001[i].Team,
                date: cdi_history001[i].date,
                Title: cdi_history001[i].Title,
                value: cdi_history001[i].value
            };
            cdi_history002 = queryall_table2({
                query: {
                    Feedback: cdi_history001[i].Feedback
                }
            });
            feedback_str_history = [];
            for (j = 0; j < cdi_history002.length; j++) {
                feedback_str_history.push(cdi_history002[j].feedback_ans);
            }
            //alert(feedback_str_history);
            object_histroy.Feedback = feedback_str_history;
            saved_data.push(object_histroy);
        }
        //alert(JSON.stringify(saved_data));
    }
    saved_data_load_storage();

    function save_data_func() {
        var current_data = create_obj();
        var not_exist = true;
        //alert("Team: "+current_data.Team+", Date: "+ current_data.date + ", Title: " + current_data.Title + ", Value: " + current_data.value + ", Feedback: " + current_data.Feedback);
        jQuery.each(saved_data, function(index) {
            if (current_data.Team === this.Team && current_data.Title === this.Title && current_data.date === this.date) {
                saved_data[index] = current_data;
                not_exist = false;
            }

        });
        if (not_exist) {
            saved_data.push(current_data);
        }
    }

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    function dateToString(date) {
        var month = date.getUTCMonth() + 1; //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        return day + "-" + month + "-" + year;
    }
    $("#todays_date").text(dateToString(new Date()));

    function sort_saved_data() {
        saved_data.sort(cpm_dates);
        for (var i = 0; i < saved_data.length; i++) {
            if (jQuery.inArray(saved_data[i].date, dates) === -1) {
                dates.push(saved_data[i].date);
            }
        }
    }
    sort_saved_data();

    function change_criteria_data() {
        save_data_func();
        $('.custom_btn').html('1');
        $(".custom_btn").each(function() {
            var int_var = parseInt($(this).html());
            $(this).css('color', 'white');
            $(this).css('-webkit-touch-callout', 'none');
            if (int_var === 2) {
                $(this).css('background-color', 'darkorange');
            } else if (int_var === 3) {
                $(this).css('background-color', 'green');
            } else if (int_var === 4) {
                $(this).css('background-color', 'lightgray');
            } else if (int_var === 5) {
                $(this).css('background-color', '#CFB53B');
            } else if (int_var === 1) {
                $(this).css('background-color', 'red');
            }

        });
        feedback_str = [];
        $('#div_criteria').scrollTop(0);
        $('#save_data1').scrollTop(0);
        $("#div_module").html("<b>" + array_Criteria[array_Criteria_counter].Module + "</b><br>");
        $("#div_title").html("<b>" + array_Criteria[array_Criteria_counter].Title + "</b>");
        $("#div_criteria").html(array_Criteria[array_Criteria_counter].Criterion);
        var html_str_feed = "";
        for (var i_count = 0; i_count < array_Criteria[array_Criteria_counter].Feedback.length; i_count++) {
            html_str_feed += "<div class='div_btn_feed' id='Feed_" + array_Criteria_counter + "_" + i_count + "' data-feed-title='" + array_Criteria[array_Criteria_counter].Feedback[i_count].Title + "_" + i_count + "'>";
            html_str_feed += "<a class='ui-btn ui-btn-inline btn_feed' data-criteria-tile='" + array_Criteria_counter + "_" + i_count + "'>" + array_Criteria[array_Criteria_counter].Feedback[i_count].Title + "</a><br>";
            html_str_feed += "</div>";
            feedback_str.push("");
        }
        $("#save_data1").html(html_str_feed);
        scroll_finnish = false;
        $(".btn_feed").on("click", function(e) {
            var data_t = $(this).attr('data-criteria-tile');
            //var feedback_stan = {"Used": ["Standard Feedback 1","Standard Feedback 2","Standard Feedback 3"], "Feedback" : ["Standard Feedback 4","Standard Feedback 5","Standard Feedback 6"]};
            var feedback_str1 = "<form><fieldset data-role='controlgroup'>";
            for (i = 0; i < feedback_stan.Used.length; i++) {
                feedback_str1 += "<label for='checkbox-v-" + i + "'><input type='checkbox' class='checkbox-v' id='checkbox-v-" + i + "' checked>" + feedback_stan.Used[i] + "</label>"
            }
            var more = i;
            for (i = 0; i < feedback_stan.Feedback.length; i++) {
                feedback_str1 += "<label for='checkbox-v-" + (more + i) + "'><input type='checkbox' class='checkbox-v' id='checkbox-v-" + (more + i) + "'>" + feedback_stan.Feedback[i] + "</label>"
            }
            feedback_str1 += "</fieldset></form>";
            $("#stand_feed").html(feedback_str1);
            $('#popup_feedback').popup({
                theme: "a"
            });
            $('#popup_feedback').popup('open');
            $('#ans_ok').on("click", function(e) {
                var ans_feedback = '<p class="anse_' + data_t + '">' + $('#cus_feed_ans').val() + '</p>';
                $('#Feed_' + data_t).append(ans_feedback);
                $(".checkbox-v:checked").each(
                    function() {
                        ans_feedback += '<p>' + $("label[for='" + $(this).attr("id") + "']").text() + '</p>';
                    }
                );
                $('#popup_feedback').popup('close');
                $('#cus_feed_ans').val('');
                feedback_str[parseInt(data_t.split('_')[1])] += $('#cus_feed_ans').val();
            });
            return false;
        });
        jQuery.each(saved_data, function() {
            if (this.Title === array_Criteria[array_Criteria_counter].Title && this.Team === $('#team_name').text() && this.date === now_date) {
                var feedback_string = this.Feedback;
                $("#change_enable").html(this.value);
                $(".btn_feed").each(function(index) {
                    $("#Feed_" + $(this).attr('data-criteria-tile')).append(feedback_string[index]);
                    feedback_str[index] = feedback_string[index];
                });
            }
        });
        $(".custom_btn").each(function() {
            var int_var = parseInt($(this).html());
            $(this).css('color', 'white');
            $(this).css('-webkit-touch-callout', 'none');
            if (int_var === 2) {
                $(this).css('background-color', 'darkorange');
            } else if (int_var === 3) {
                $(this).css('background-color', 'green');
            } else if (int_var === 4) {
                $(this).css('background-color', 'lightgray');
            } else if (int_var === 5) {
                $(this).css('background-color', '#CFB53B');
            } else if (int_var === 1) {
                $(this).css('background-color', 'red');
            }

        });
    }
    var object_hold;
    //$(".custom_btn").css({'background-color': 'coral','color': 'white'});
    $(".custom_btn").each(function() {
        var int_var = parseInt($(this).html());
        $(this).css('color', 'white');
        $(this).css('-webkit-touch-callout', 'none');
        if (int_var === 2) {
            $(this).css('background-color', 'darkorange');
        } else if (int_var === 3) {
            $(this).css('background-color', 'green');
        } else if (int_var === 4) {
            $(this).css('background-color', 'lightgray');
        } else if (int_var === 5) {
            $(this).css('background-color', '#CFB53B');
        } else if (int_var === 1) {
            $(this).css('background-color', 'red');
        }

    });
    $(".custom_btn1").each(function() {
        var int_var = parseInt($(this).html());
        //alert(parseInt($(this).html()));
        $(this).css('color', 'white');
        if (int_var === 2) {
            $(this).css('background-color', 'darkorange');
        } else if (int_var === 3) {
            $(this).css('background-color', 'green');
        } else if (int_var === 4) {
            $(this).css('background-color', 'lightgray');
        } else if (int_var === 5) {
            $(this).css('background-color', '#CFB53B');
        } else if (int_var === 1) {
            $(this).css('background-color', 'red');
        }

    });
    $(window).on("orientationchange", function(event) {
        //alert( "This device is in " + window.orientation + " mode!" ); //+-90 == landscape
    });
    $('body').scroll(function(e) {
        return false;
    });
    // Bind the swipeleftHandler callback function to the swipe event on div.box
    document.oncontextmenu = function(e) {
        return false;
    }
    var header_height1 = $('#div_header1').height();
    var header_height = $('#div_header').height();
    var screen_height = $(window).height();
    var screen_width = $(window).width();
    //alert(header_height);
    $("#content1").attr('style', 'margin-top:' + header_height + 'px;');
    $("#content0").attr('style', 'margin-top:' + header_height1 + 'px;');
    $("#img_up").attr('style', 'top:' + (header_height + 50) + 'px;');
    $("#img_up").attr('style', $("#img_up").attr('style') + 'left:' + 50 + 'px;position: fixed;z-index: 3;');
    $("#img_down").attr('style', 'bottom:' + 50 + 'px; left:' + 50 + 'px;position: fixed;z-index: 3;');
    $("#img_up1").attr('style', 'top:' + (header_height + 50) + 'px;');
    $("#img_up1").attr('style', $("#img_up").attr('style') + 'left:' + 50 + 'px;position: fixed;z-index: 3;');
    $("#img_down1").attr('style', 'bottom:' + 50 + 'px; left:' + 50 + 'px;position: fixed;z-index: 3;');
    var div1_height = $('#div_title').height();
    var div3_height = $('#save_data0').height();
    var new_height = ((screen_height - div1_height - div3_height - header_height - 250) / 2);


    $("#page1").on("swiperight", swipeleftHandler);
    //$( "#content1" ).on( "swipeup", swipeupHandler);
    //$( "#content1" ).on( "swipedown", swipedownHandler);
    $("#page2").on("swiperight", swiperightHandler0);
    $("#page2").on("swipeleft", swipeleftHandler0);
    //$('#div_criteria').on('swiperight swipeup swipedown', function(event) {
    //event.stopPropagation();
    //event.preventDefault();
    //});
    var swipe_distance_x = 150;
    var swipe_distance_y = 150;
    var test_scroll = false;
    var test_scroll0 = false;
    var distance_scroll = 0;
    var distance_scroll0 = 0;


    function swipeleftHandler0() {
        var index = jQuery.inArray(current_date, dates) + 1;
        if (index === dates.length) {
            index = dates.length - 1;
        }
        current_date = dates[index];
        var counter_i;
        var counter_j;
        var html_str_feedback = "";
        var feedback_question = [];
        var feedback_ans = [];
        if ($("#div_date").text() === current_date) {
            $("body").pagecontainer("change", "#page1", {
                transition: "slide"
            });
        } else if ($("#div_date").text() !== current_date) {
            for (counter_i = 0; counter_i < saved_data.length; counter_i++) {
                if (array_Criteria[0].Title === saved_data[counter_i].Title && saved_data[counter_i].Team === $("#team_name").text() && saved_data[counter_i].date === current_date) {
                    $("#team_name1").text(saved_data[counter_i].Team);
                    $("#div_date").text(saved_data[counter_i].date);
                    $("#div_title0").html("<b>" + saved_data[counter_i].Title + "</b>")
                    $("#change_enable0").html(saved_data[counter_i].value);
                    feedback_ans = saved_data[counter_i].Feedback;
                    feedback_question = array_Criteria[0].Feedback;
                    for (var counter_j = 0; counter_j < feedback_ans.length; counter_j++) {
                        html_str_feedback += "<b>" + feedback_question[counter_j].Title + ": </b><br>";
                        html_str_feedback += feedback_ans[counter_j];
                    }
                    $("#save_data10").html(html_str_feedback);
                }
            }
            $(".custom_btn2").each(function() {
                var int_var = parseInt($(this).html());
                //alert(parseInt($(this).html()));
                $(this).css('color', 'white');
                if (int_var === 2) {
                    $(this).css('background-color', 'darkorange');
                } else if (int_var === 3) {
                    $(this).css('background-color', 'green');
                } else if (int_var === 4) {
                    $(this).css('background-color', 'lightgray');
                } else if (int_var === 5) {
                    $(this).css('background-color', '#CFB53B');
                } else if (int_var === 1) {
                    $(this).css('background-color', 'red');
                }

            });


            $("body").pagecontainer("change", "#page2", {
                transition: "slide",
                reverse: true
            });
            var header_height1 = $('#div_header0').height();
            $("#content2").attr('style', 'margin-top:' + header_height1 + 'px;');
        }
    }

    function swiperightHandler0() {
        var index = jQuery.inArray(current_date, dates) - 1;
        if (index === -1) {
            idex = 0;
        }
        current_date = dates[index];
        var counter_i;
        var counter_j;
        var html_str_feedback = "";
        var feedback_question = [];
        var feedback_ans = [];
        if (current_date !== $("#div_date").text()) {
            for (counter_i = 0; counter_i < saved_data.length; counter_i++) {
                if (array_Criteria[0].Title === saved_data[counter_i].Title && saved_data[counter_i].Team === $("#team_name").text() && saved_data[counter_i].date === current_date) {
                    $("#team_name1").text(saved_data[counter_i].Team);
                    $("#div_date").text(saved_data[counter_i].date);
                    $("#div_title0").html("<b>" + saved_data[counter_i].Title + "</b>")
                    $("#change_enable0").html(saved_data[counter_i].value);
                    feedback_ans = saved_data[counter_i].Feedback;
                    feedback_question = array_Criteria[0].Feedback;
                    for (var counter_j = 0; counter_j < feedback_ans.length; counter_j++) {
                        html_str_feedback += "<b>" + feedback_question[counter_j].Title + ": </b><br>";
                        html_str_feedback += feedback_ans[counter_j];
                    }
                    $("#save_data10").html(html_str_feedback);
                }
            }
            $(".custom_btn2").each(function() {
                var int_var = parseInt($(this).html());
                //alert(parseInt($(this).html()));
                $(this).css('color', 'white');
                if (int_var === 2) {
                    $(this).css('background-color', 'darkorange');
                } else if (int_var === 3) {
                    $(this).css('background-color', 'green');
                } else if (int_var === 4) {
                    $(this).css('background-color', 'lightgray');
                } else if (int_var === 5) {
                    $(this).css('background-color', '#CFB53B');
                } else if (int_var === 1) {
                    $(this).css('background-color', 'red');
                }

            });
            $("body").pagecontainer("change", "#page2", {
                transition: "slide",
                reverse: true
            });
            var header_height1 = $('#div_header0').height();
            $("#content2").attr('style', 'margin-top:' + header_height1 + 'px;');
        }
    }
    $("#login_user").on('click', login_user);
    $("#img_down").on('click', swipeupHandler);
    $("#img_up").on('click', swipedownHandler);
    $("#img_down1").on('click', swipeupHandler0);
    $("#img_up1").on('click', swipedownHandler0);

    function login_user(event) {
        var username = $("#username").val();
        var username_password = $("#password").val();
        var login_object = {
            "Fieldnames": ["Username", "Password"],
            "Values": [username, username_password],
            "table_name": "Login_tbl",
            "action": "lselect"
        };
        $.post(host + "index.php", login_object,
            function(data, status) {
            	login_obj_keep = jQuery.parseJSON(data)[0];
                if (typeof login_obj_keep != 'undefined') {
		                reverse: true
		            $("body").pagecontainer("change", "#page1", {
		                transition: "slide",
		            });
		            var header_height = $('#div_header').height();
		            var screen_height = $(window).height();
		            var screen_width = $(window).width();
		            //alert(header_height);
		            $("#content1").attr('style', 'margin-top:' + header_height + 'px;');
		            $("#img_up").attr('style', 'top:' + (header_height + 50) + 'px;');
		            $("#img_up").attr('style', $("#img_up").attr('style') + 'left:' + 50 + 'px;position: fixed;z-index: 3;');
		            $("#img_down").attr('style', 'bottom:' + 50 + 'px; left:' + 50 + 'px;position: fixed;z-index: 3;');
		            $("#img_up1").attr('style', 'top:' + (header_height + 50) + 'px;');
		            $("#img_up1").attr('style', $("#img_up").attr('style') + 'left:' + 50 + 'px;position: fixed;z-index: 3;');
		            $("#img_down1").attr('style', 'bottom:' + 50 + 'px; left:' + 50 + 'px;position: fixed;z-index: 3;');
		            var div1_height = $('#div_title').height();
		            var div3_height = $('#save_data0').height();
		            var new_height = ((screen_height - div1_height - div3_height - header_height - 250) / 2);
                }
            }
        );
    }

    function swipedownHandler(event) {
        if (array_Criteria_counter === 0) {
            array_Criteria_counter = array_Criteria.length - 1;

        } else {
            array_Criteria_counter--;
        }
        //alert(array_Criteria_counter);
        change_criteria_data();
    }

    function swipeupHandler(event) {
        if (array_Criteria_counter < array_Criteria.length - 1) {
            array_Criteria_counter++;
        } else {
            array_Criteria_counter = 0;
        }
        //alert(array_Criteria_counter);
        change_criteria_data();

    }

    function swipeupHandler0(event) {
        array_Criteria_counter0++;
        if (array_Criteria_counter0 === array_Criteria.length) {
            array_Criteria_counter0 = 0;
        }
        var counter_i;
        var counter_j;
        var html_str_feedback = "";
        var feedback_question = [];
        var feedback_ans = [];
        for (counter_i = 0; counter_i < saved_data.length; counter_i++) {
            if (array_Criteria[array_Criteria_counter0].Title === saved_data[counter_i].Title && saved_data[counter_i].Team === $("#team_name").text() && saved_data[counter_i].date === current_date) {
                $("#team_name1").text(saved_data[counter_i].Team);
                $("#div_date").text(saved_data[counter_i].date);
                $("#div_title0").html("<b>" + saved_data[counter_i].Title + "</b>")
                $("#change_enable0").html(saved_data[counter_i].value);
                feedback_ans = saved_data[counter_i].Feedback;
                feedback_question = array_Criteria[array_Criteria_counter0].Feedback;
                for (var counter_j = 0; counter_j < feedback_ans.length; counter_j++) {
                    html_str_feedback += "<b>" + feedback_question[counter_j].Title + ": </b><br>";
                    html_str_feedback += feedback_ans[counter_j];
                }
                $("#save_data10").html(html_str_feedback);
            }
        }
        $(".custom_btn2").each(function() {
            var int_var = parseInt($(this).html());
            //alert(parseInt($(this).html()));
            $(this).css('color', 'white');
            if (int_var === 2) {
                $(this).css('background-color', 'darkorange');
            } else if (int_var === 3) {
                $(this).css('background-color', 'green');
            } else if (int_var === 4) {
                $(this).css('background-color', 'lightgray');
            } else if (int_var === 5) {
                $(this).css('background-color', '#CFB53B');
            } else if (int_var === 1) {
                $(this).css('background-color', 'red');
            }

        });
    }

    function swipedownHandler0(event) {
        array_Criteria_counter0--;
        if (array_Criteria_counter0 === -1) {
            array_Criteria_counter0 = (array_Criteria.length - 1);
        }
        var counter_i;
        var counter_j;
        var html_str_feedback = "";
        var feedback_question = [];
        var feedback_ans = [];
        for (counter_i = 0; counter_i < saved_data.length; counter_i++) {
            if (array_Criteria[array_Criteria_counter0].Title === saved_data[counter_i].Title && saved_data[counter_i].Team === $("#team_name").text() && current_date === saved_data[counter_i].date) {
                $("#team_name1").text(saved_data[counter_i].Team);
                $("#div_date").text(saved_data[counter_i].date);
                $("#div_title0").html("<b>" + saved_data[counter_i].Title + "</b>")
                $("#change_enable0").html(saved_data[counter_i].value);
                feedback_ans = saved_data[counter_i].Feedback;
                feedback_question = array_Criteria[array_Criteria_counter0].Feedback;
                for (var counter_j = 0; counter_j < feedback_ans.length; counter_j++) {
                    html_str_feedback += "<b>" + feedback_question[counter_j].Title + ": </b><br>";
                    html_str_feedback += feedback_ans[counter_j];
                }
                $("#save_data10").html(html_str_feedback);
            }
        }
        $(".custom_btn2").each(function() {
            var int_var = parseInt($(this).html());
            //alert(parseInt($(this).html()));
            $(this).css('color', 'white');
            if (int_var === 2) {
                $(this).css('background-color', 'darkorange');
            } else if (int_var === 3) {
                $(this).css('background-color', 'green');
            } else if (int_var === 4) {
                $(this).css('background-color', 'lightgray');
            } else if (int_var === 5) {
                $(this).css('background-color', '#CFB53B');
            } else if (int_var === 1) {
                $(this).css('background-color', 'red');
            }

        });
    }
    // Callback function references the event target and adds the 'swiperight' class to it
    function swipeleftHandler(event) {
        var counter_i;
        var counter_j;
        var html_str_feedback = "";
        var feedback_question = [];
        var feedback_ans = [];
        current_date = dates[dates.length - 1];
        for (counter_i = 0; counter_i < saved_data.length; counter_i++) {
            if (array_Criteria[0].Title === saved_data[counter_i].Title && saved_data[counter_i].Team === $("#team_name").text() && saved_data[counter_i].date === current_date) {
                $("#team_name1").text(saved_data[counter_i].Team);
                $("#div_date").text(saved_data[counter_i].date);
                $("#div_title0").html("<b>" + saved_data[counter_i].Title + "</b>")
                $("#change_enable0").html(saved_data[counter_i].value);
                feedback_ans = saved_data[counter_i].Feedback;
                feedback_question = array_Criteria[0].Feedback;
                for (var counter_j = 0; counter_j < feedback_ans.length; counter_j++) {
                    html_str_feedback += "<b>" + feedback_question[counter_j].Title + ": </b><br>";
                    html_str_feedback += feedback_ans[counter_j];
                }
                $("#save_data10").html(html_str_feedback);
            }
        }
        $(".custom_btn2").each(function() {
            var int_var = parseInt($(this).html());
            //alert(parseInt($(this).html()));
            $(this).css('color', 'white');
            if (int_var === 2) {
                $(this).css('background-color', 'darkorange');
            } else if (int_var === 3) {
                $(this).css('background-color', 'green');
            } else if (int_var === 4) {
                $(this).css('background-color', 'lightgray');
            } else if (int_var === 5) {
                $(this).css('background-color', '#CFB53B');
            } else if (int_var === 1) {
                $(this).css('background-color', 'red');
            }

        });

        $("body").pagecontainer("change", "#page2", {
            transition: "slide",
            reverse: true
        });
        var header_height1 = $('#div_header0').height();
        $("#content2").attr('style', 'margin-top:' + header_height1 + 'px;');
    }


    $(".custom_btn").on("click",
        function() {
            var int_var = parseInt($(this).html());
            //alert(parseInt($(this).html()));
            if (int_var === 1) {
                $(this).css('background-color', 'darkorange');
                $(this).html(2);
            } else if (int_var === 2) {
                $(this).css('background-color', 'green');
                $(this).html(3);
            } else if (int_var === 3) {
                $(this).css('background-color', 'lightgray');
                $(this).html(4);
            } else if (int_var === 4) {
                $(this).css('background-color', '#CFB53B');
                $(this).html(5);
            } else if (int_var === 5) {
                $(this).css('background-color', 'red');
                $(this).html(1);
            }


        }
    );
    $("#team_name").on("click",
        function() {
            $("#popup_team_names").popup({
                theme: "a",
                positionTo: "#team_name"
            });
            $("#popup_team_names").popup("open");
            return false;
        }
    );
    $("#team_name1").on("click",
        function() {
            $("#popup_team_names1").popup({
                theme: "a",
                positionTo: "#team_name1"
            });
            $("#popup_team_names1").popup("open");
            return false;
        }
    );
    //document load
    $(function() {
        //Update criteria data
        $("#div_module").html("<b>" + array_Criteria[array_Criteria_counter].Module + "</b><br>");
        $("#div_title").html("<b>" + array_Criteria[array_Criteria_counter].Title + "</b>");
        $("#div_criteria").html(array_Criteria[array_Criteria_counter].Criterion);
        var html_str_feed = "";
        for (var i_count = 0; i_count < array_Criteria[array_Criteria_counter].Feedback.length; i_count++) {
            html_str_feed += "<div class='div_btn_feed' id='Feed_" + array_Criteria_counter + "_" + i_count + "' data-feed-title='" + array_Criteria[array_Criteria_counter].Feedback[i_count].Title + "_" + i_count + "'>";
            html_str_feed += "<a class='ui-btn ui-btn-inline btn_feed' data-criteria-tile='" + array_Criteria_counter + "_" + i_count + "'>" + array_Criteria[array_Criteria_counter].Feedback[i_count].Title + "</a><br>";
            html_str_feed += "</div>";
            feedback_str.push("");
        }
        $("#save_data1").html(html_str_feed);
        $(".btn_feed").on("click", function(e) {
            data_t = $(this).attr('data-criteria-tile');
            var feedback_str1 = "<form><fieldset data-role='controlgroup'>";
            for (i = 0; i < feedback_stan.Used.length; i++) {
                feedback_str1 += "<label for='checkbox-v-" + i + "'><input type='checkbox' class='checkbox-v' id='checkbox-v-" + i + "' checked>" + feedback_stan.Used[i] + "</label>";
            }
            var more = i;
            for (i = 0; i < feedback_stan.Feedback.length; i++) {
                feedback_str1 += "<label for='checkbox-v-" + (more + i) + "'><input type='checkbox' class='checkbox-v' id='checkbox-v-" + (more + i) + "'>" + feedback_stan.Feedback[i] + "</label>";
            }
            feedback_str1 += "</fieldset></form>";
            $("#stand_feed").html(feedback_str1);
            $('#popup_feedback').popup({
                theme: "a"
            });
            $('#popup_feedback').popup('open');
            $('#ans_ok').on("click", function(e) {
                var ans_feedback = '<p>' + $('#cus_feed_ans').val() + '</p>';
                $(".checkbox-v:checked").each(
                    function() {
                        ans_feedback += '<p>' + $("label[for='" + $(this).attr("id") + "']").text() + '</p>';
                    }
                );
                $('#Feed_' + data_t).append(ans_feedback);
                $('#popup_feedback').popup('close');
                $('#cus_feed_ans').val('');
                feedback_str[parseInt(data_t.split('_')[1])] += ans_feedback;

            });
            return false;
        });
        $("#btn_bars0").on("click", function() {
            $("#criteria_list1").empty();
            var html_str_page1_lst = '<li><a id="history_team" class="list_nr1" href="#">History</a></li>';
            for (var j_count = 0; j_count < array_Criteria.length; j_count++) {
                html_str_page1_lst += '<li><a class="criteria_lst1  list_nr1" data-arrayindex="' + j_count + '" href="#">' + array_Criteria[j_count].Title + '</a></li>';
            }
            $("#criteria_list1").append(html_str_page1_lst);
            $("#criteria_list1").trigger('create');
            $("#criteria_list1").listview('refresh');
            $(".criteria_lst1").on("click", function() {
                //alert(array_Criteria_counter);
                array_Criteria_counter = $(this).attr('data-arrayindex');
                change_criteria_data();
            });
            $(".list_nr1").on("click", function(event) {
                $("#panel1").panel("close");
            });
            $(".list_nr2").on("click", function(event) {
                $("#panel1").panel("close");
            });
            $("#history_team").on("click", function(event) {
                swipeleftHandler(event);
            });
        });
        $("#btn_bars1").on("click", function() {
            $("#criteria_list2").empty();
            var html_str_page2_lst = '<li><a class="list_nr1" id="new_data_team" href="#">New Data</a></li>';
            for (var j_count = 0; j_count < array_Criteria.length; j_count++) {
                html_str_page2_lst += '<li><a class="list_nr1" class="criteria_lst2" data-arrayindex="' + j_count + '" href="#">' + array_Criteria[j_count].Title + '</a></li>';
            }

            $("#criteria_list2").append(html_str_page2_lst);
            $("#criteria_list2").trigger('create');
            $("#criteria_list2").listview('refresh');
            $(".list_nr1").on("click", function(event) {
                $("#panel2").panel("close");
            });
            $(".list_nr2").on("click", function(event) {
                $("#panel2").panel("close");
            });
            $("#new_data_team").on("click", function() {
                $("body").pagecontainer("change", "#page1", {
                    transition: "slide"
                });
            });
        });
        $('#datepicker').val("");
        $.event.special.tap.emitTapOnTaphold = false;

        $(".custom_btn").on('tap', function() {
            console.log('tap!');
        }).on("taphold", function(e) {
            e.preventDefault();
            object_hold = this;
            var link_name = $(this).attr('id');
            $("#popup_btn").popup({
                theme: "a",
                positionTo: "#" + link_name
            });
            $("#popup_btn").popup("open");
            return false;

        });
        var header = $('[data-role=header]').outerHeight();
        var panel = $('#panel1').height();
        var panelheight = panel - header;

        $('#panel1').css({
            'top': header,
            'min-height': panelheight
        });
        var panel1 = $('#panel2').height();
        var panelheight1 = panel1 - header;

        $('#panel2').css({
            'top': header,
            'min-height': panelheight1
        });
        $(".team_name").on("click",
            function() {
                $("#team_name").html($(this).attr('data-team-name'));
                $("#team_name1").html($(this).attr('data-team-name'));
                $("#popup_team_names").popup("close");
            }

        );
    });
    $(".custom_btn1").on("click", function(event) {
        var int_var = parseInt($(this).html());
        //alert(parseInt($(this).html()));
        if (int_var === 2) {
            $(object_hold).css('background-color', 'darkorange');
            $(object_hold).html(2);
        } else if (int_var === 3) {
            $(object_hold).css('background-color', 'green');
            $(object_hold).html(3);
        } else if (int_var === 4) {
            $(object_hold).css('background-color', 'lightgray');
            $(object_hold).html(4);
        } else if (int_var === 5) {
            $(object_hold).css('background-color', '#CFB53B');
            $(object_hold).html(5);
        } else if (int_var === 1) {
            $(object_hold).css('background-color', 'red');
            $(object_hold).html(1);
        }
        $("#popup_btn").popup("close");
    });
    $("#btn_save").on("click", function(e) {
        save_data_func();
        var i = 0;
        var count_i_table1;
        var Feedback_titles;
        for (i = 0; i < saved_data.length; i++) {
            count_i_table1 = count_table1();
            insert_table1({
                Team: saved_data[i].Team,
                date: saved_data[i].date,
                Title: saved_data[i].Title,
                value: saved_data[i].value,
                Feedback: count_i_table1
            });
            for (var k = 0; k < array_Criteria.length; k++) {
                if (array_Criteria[k].Title === saved_data[i].Title) {
                    Feedback_titles = array_Criteria[k].Feedback;
                }
            }
            for (var j = 0; j < saved_data[i].Feedback.length; j++) {
                insert_table2({
                    Feedback: count_i_table1,
                    title: Feedback_titles[j].Title,
                    feedback_ans: saved_data[i].Feedback[j]
                });
            }
        }
    });
});
    }
};

app.initialize();
