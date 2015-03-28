Dojo widget is supposed to be reused by all team members, however, it is not easy to know what widgets there already are, especially in large project, and for new team member.  

This web application can list your customized dojo widgets in one page, so that your team members can easily find out what widgets are there and how to use them; it is a node.js project, your widgets can be hosted on any server(**widget server**), just update the url in config file.
# How to setup
## use source code  
1. After `git clone`, run `npm install`  
2. Download `dojo`, copy `dijit` folder to `public/javascripts`(there is no dijit npm module, so you need to download it from dojo website, but there is `dojo` module, so `dojo` is not needed here)  
3. Update configuration according to your env:
  - edit `config/default.json`, `widgetUrl` is the place where holds the widgets.   
   
## use docker
TODO

#How to setup widget server
1.  Create `widgets.json` and put to root folder of your `widgetUrl`, you can find a sample under `public/widgets.json`
2. For each widget
   - create a `generator`, which will create that widget, you can find a sample under `public/generator`; 
   - add an entry in `widgets.json`

#How to access
1. `npm start`
2. `http://<ip_address>`