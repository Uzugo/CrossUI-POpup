// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"Panel_Btn")
                .setLeft("8.380952380952381em")
                .setTop("3.0476190476190474em")
                .setCaption("Panel_Btn")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"xui_ui_panel4",
                        "args":[
                            "{page.xui_ui_panel4.popUp()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method":"popUp",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel4")
                .setDock("none")
                .setLeft("14.476190476190476em")
                .setTop("29.714285714285715em")
                .setCaption("Panel")
            );
            
            append(
                xui.create("xui.UI.PopMenu")
                .setHost(host,"xui_ui_popmenu4")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setDirtyMark(false)
                .setLeft("41.142857142857146em")
                .setTop("3.8095238095238093em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"List_Btn")
                .setLeft("21.333333333333332em")
                .setTop("3.0476190476190474em")
                .setWidth("7.390476190476191em")
                .setCaption("List_B")
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list2")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
                .setLeft("32.76190476190476em")
                .setTop("18.285714285714285em")
                .setWidth("14.476190476190476em")
                .setHeight("11.2em")
                .setLabelSize("7.619047619047619em")
                .setLabelCaption("List")
                .setValue("a")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});