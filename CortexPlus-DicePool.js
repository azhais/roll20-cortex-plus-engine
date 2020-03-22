// vim:fdm=marker
(function() {
//  {{{ Third Party Modules

/*
 * Various third-party libraries and functions used in this script.
 * See comments for source and licensing information if applicable
 */

//  {{{ KolorWheel library

/* source: http://linkbroker.hu/stuff/kolorwheel.js */
function KolorWheel(a){this.resultList=[this];this.elm=null;if(typeof(a)=="undefined"){a="#000000"}if(typeof(a.validateHsl)=="function"){this.setHsl([a.h,a.s,a.l])}else{this.setColor(a)}}KolorWheel.prototype.setColor=function(a){if(typeof(a)=="undefined"){return}if(typeof(a)=="object"){this.setHsl(a)}else{this.setHex(a)}};KolorWheel.prototype.setHsl=function(a){this.h=a[0];this.s=a[1];this.l=a[2];this.validateHsl();return this};KolorWheel.prototype.validateHsl=function(){this.h=this.h%360;if(this.h<0){this.h+=360}if(this.s<0){this.s=0}if(this.s>100){this.s=100}if(this.l<0){this.l=0}if(this.l>100){this.l=100}};KolorWheel.prototype.setHex=function(e){if(e.substring(0,1)=="#"){e=e.substring(1)}var d=parseInt(e.substring(0,2),16);var c=parseInt(e.substring(2,4),16);var a=parseInt(e.substring(4,6),16);this.setRgb([d,c,a]);return this};KolorWheel.prototype.setRgb=function(e){var i=e[0]/255;var h=e[1]/255;var c=e[2]/255;var a=Math.max(i,h,c);var f=Math.min(i,h,c);this.h=(a+f)/2;this.s=this.h;this.l=this.h;if(a==f){this.h=0;this.s=0}else{var j=a-f;this.s=this.l>0.5?j/(2-a-f):j/(a+f);switch(a){case i:this.h=(h-c)/j+(h<c?6:0);break;case h:this.h=(c-i)/j+2;break;case c:this.h=(i-h)/j+4;break}this.h=this.h/6}this.h=360*this.h;this.s=100*this.s;this.l=100*this.l;return this};KolorWheel.prototype.hue2rgb=function(c,b,a){if(a<0){a+=1}if(a>1){a-=1}if(a<1/6){return c+(b-c)*6*a}if(a<1/2){return b}if(a<2/3){return c+(b-c)*(2/3-a)*6}return c};KolorWheel.prototype.getRgb=function(){this.validateHsl();var e=this.h/360;var d=this.s/100;var c=this.l/100;var i=c;var f=c;var a=c;if(d!=0){var j=c<0.5?c*(1+d):c+d-c*d;var k=2*c-j;i=this.hue2rgb(k,j,e+1/3);f=this.hue2rgb(k,j,e);a=this.hue2rgb(k,j,e-1/3)}return[Math.round(i*255),Math.round(f*255),Math.round(a*255)]};KolorWheel.prototype.getHex=function(){var a=this.getRgb();var b=this.toHexByte(a[0]);b+=this.toHexByte(a[1]);b+=this.toHexByte(a[2]);return"#"+b.toUpperCase()};KolorWheel.prototype.toHexByte=function(b){var a=b.toString(16);if(a.length<2){a="0"+a}return a};KolorWheel.prototype.getHsl=function(){this.validateHsl();return[this.h,this.s,this.l]};KolorWheel.prototype.multi=function(j,o,n,m,l,k,h,f,d,c){var e=[].concat(this.resultList);this.resultList=[];for(var b in e){var a=e[b];a.workList=[];if(j=="rel"){KolorWheel.prototype.spinSingle.call(a,"rel",o,n,m,l,k,h,f,d,c)}if(j=="abs"){KolorWheel.prototype.spinSingle.call(a,"abs",o,n,m,l,k,h,f,d,c)}this.resultList=this.resultList.concat(a.workList)}if(this.resultList.length==0){return this}var g=this.resultList[this.resultList.length-1];this.h=g.h;this.s=g.s;this.l=g.l;return this};KolorWheel.prototype.rel=function(d,c,a,b,e){return this.multi("rel",d,c,a,b,e)};KolorWheel.prototype.abs=function(d,c,a,b,g){var f=false;if(typeof(d)=="object"){if(typeof(d.validateHsl)=="function"){f=true}}else{if((""+d).substring(0,1)=="#"){f=true}if((""+d).length>4){f=true}}if(f){var e=new KolorWheel(d);return this.multi("abs",e.h,e.s,e.l,c,a)}else{return this.multi("abs",d,c,a,b,g)}};KolorWheel.prototype.spinSingle=function(i,l,f,j,d,c){var h=(i=="abs"?-1:0);if(typeof(l)=="undefined"){l=h}if(typeof(f)=="undefined"){f=h}if(typeof(j)=="undefined"){j=h}if(typeof(l)=="undefined"){d=12}var o=0;var k=0;var n=0;if(typeof(l)=="object"){o=l.length}if(typeof(f)=="object"){k=f.length}if(typeof(j)=="object"){n=j.length}if(typeof(d)=="undefined"){d=1;if(o>d){d=o}if(k>d){d=k}if(n>d){d=n}}if(typeof(c)=="undefined"){c=0}var e=null;if(typeof(d)=="object"){e=d;d=e.length}for(step=c;step<d;step++){var p=new KolorWheel(this);var a=(d==1?1:step/(d-1));var g;var m;var b;if(o>0){g=l[step%o]}else{g=l*a}if(k>0){m=f[step%k]}else{m=f*a}if(n>0){b=j[step%n]}else{b=j*a}if(i=="rel"){p.h+=g;p.s+=m;p.l+=b}else{if(l==h){p.h=this.h}else{if(o==0){p.h=this.calcLinearGradientStep(step,d,this.h,l)}else{p.h=g}}if(f==h){p.s=this.s}else{if(k==0){p.s=this.calcLinearGradientStep(step,d,this.s,f)}else{p.s=m}}if(j==h){p.l=this.l}else{if(n==0){p.l=this.calcLinearGradientStep(step,d,this.l,j)}else{p.l=b} }}p.step=step;if(e){p.elm=e.eq(step)}this.workList[step]=p}};KolorWheel.prototype.calcLinearGradientStep=function(d,c,e,f){var b=(d/(c-1));var a=e+((f-e)*b);return a};KolorWheel.prototype.each=function(b){for(var a in this.resultList){b.call(this.resultList[a],this.resultList[a].elm)}};KolorWheel.prototype.get=function(a){if(typeof(a)=="undefined"){a=0}return this.resultList[a]};KolorWheel.prototype.isDark=function(){return(!this.isLight())};KolorWheel.prototype.isLight=function(){var b=this.getRgb();var a=(0.299*b[0])+(0.587*b[1])+(0.114*b[2]);return(a>127)};
// }}}


// {{{ nodjs printf

/*
 * forum: https://app.roll20.net/forum/post/142028/script-string-formatter
 * docs: http://nodejs.org/api/util.html#util_util_format_format
 * license: https://raw.github.com/joyent/node/v0.10.28/LICENSE
 * Copyright Joyent, Inc. and other Node contributors.
 *
 * Formats a string for printing.
 *
 * @name    debug
 * @param   {Mixed[]}       {...}
 * @return  {Void}
 * @copyright               https://raw.github.com/joyent/node/master/LICENSE
 */
var formatRegexp                        = /%[sdj%]/g;
var format = function (f) {
    var args                            = Array.prototype.slice.call(arguments, 0);
    var argl                            = args.length;

    if (typeof f !== 'string') {
        var objects                     = [];
        while (argl--) {
            objects.unshift(args[i].toString());
        }

        return objects.join(' ');
    }

    var i                               = 1;
    var str = String(f).replace(formatRegexp, function (x) {
        if (x === '%%') return '%';
        if (i >= args) return x;
        switch (x) {
            case '%s' : return String(args[i++]);
            case '%d' : return Number(args[i++]);
            case '%j' : return JSON.stringify(args[i++]);
            default:
                return x;
        }
    });

    var x;
    while (i++ < argl) {
        x                               = args[i];
        if (x === null || typeof x !== 'object') {
            str                         = [str, x].join(' ')
        }
        else {
            str                         += [str, x.toString()].join();
        }
    }

    return str;
};
// }}}

// here ends the 3rd part module section

// }}}

// {{{ Roll20 Util Functions

function utilEmpty(container) {
    while(container.length > 0) {
        container.pop();
    }
}

function utilGetPlayerColor(playerid) {
    var player = getObj('player', playerid);
    return player.get('color');
}

function utilGetGMList(ctx) {
    var handouts = findObjs({_type:"handout", name: cpCONSTANTS.gmlistHANDOUT});
    if(handouts.length == 0 ) {
        log("utilGetGMList: no GM Handout found");
        Panel.error(ctx, "Missing GM Handout", "The handout called " + cpCONSTANTS.gmlistHANDOUT + " is missing");
        return false;
    }
    var gms = handouts[0].get('controlledby');
    if(gms.length == 0)
        Panel.error(ctx, "No GMs Found", "The handout called " + cpCONSTANTS.gmlistHANDOUT + " doesn't have any players assigned.");
    return gms.split(',');
}

function isGM(ctx) {
    var gms = utilGetGMList(ctx);
    return _.contains(gms, ctx.playerid);
}

// }}}

// {{{ Chat Panels
/**
 * Helper for creating pretty text panels in the chat.
 * Styles based off Bootstrap.
 * Inspired by Power Cards plugin.
 */

function PanelColors (bg, head, border) {
    this.headBG   = bg,
    this.headText = head,
    this.border   = border
};

PanelColors.Error   = new PanelColors("rgb(242, 222, 222)",  "rgb(169, 68, 66)", "rgb(235, 204, 209)");
PanelColors.Info    = new PanelColors("rgb(217, 237, 247)", "rgb(49, 112, 143)", "rgb(188, 232, 241)");
PanelColors.Warning = new PanelColors("rgb(252, 248, 227)", "rgb(138, 109, 59)", "rgb(250, 235, 204)");
PanelColors.Success = new PanelColors("rgb(223, 240, 216)", "rgb(60, 118, 61)", "rgb(214, 233, 198)");

function Panel(colors) {
    this.panelMarkup = {
        outerDiv   : '<div style="background-color: rgb(255, 255, 255); border-bottom-color: COLOR_BORDER; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-bottom-style: solid; border-bottom-width: 1px; border-image-outset: 0px; border-image-repeat: stretch; border-image-slice: 100%; border-image-source: none; border-image-width: 1; border-left-color: COLOR_BORDER; border-left-style: solid; border-left-width: 1px; border-right-color: COLOR_BORDER; border-right-style: solid; border-right-width: 1px; border-top-color: COLOR_BORDER; border-top-left-radius: 4px; border-top-right-radius: 4px; border-top-style: solid; border-top-width: 1px; -webkit-box-shadow: rgba(0, 0, 0, 0.0470588) 0px 1px 1px 0px; box-shadow: rgba(0, 0, 0, 0.0470588) 0px 1px 1px 0px; box-sizing: border-box; color: rgb(51, 51, 51); display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px;">',
        headDiv    :  '<div style="  background-color: COLOR_BG; border-bottom-color: COLOR_BORDER; border-bottom-style: solid; border-bottom-width: 1px; border-left-color: COLOR_BORDER; border-right-color: COLOR_BORDER; border-top-color: COLOR_BORDER; border-top-left-radius: 3px; border-top-right-radius: 3px; box-sizing: border-box; color: COLOR_HEAD; display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; padding-bottom: 10px; padding-left: 15px; padding-right: 15px; padding-top: 10px;"> ',
        h3         : '<h3 style=" box-sizing: border-box; color: COLOR_HEAD; display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 500; line-height: 17.600000381469727px; margin-bottom: 0px; margin-top: 0px;"> ',
        contentDiv : '<div style=" box-sizing: border-box; color: rgb(51, 51, 51); display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; padding-bottom: 15px; padding-left: 15px; padding-right: 15px; padding-top: 15px;">',
    };
    this.colors = colors;
    this.format_colors = function(str) {
        return str.replace(/COLOR_HEAD/g, this.colors.headText).replace(/COLOR_BORDER/g, this.colors.border).replace(/COLOR_BG/g, this.colors.headBG);
    };
    this.render = function(head, detail) {
        var outerDiv = this.format_colors(this.panelMarkup.outerDiv),
        headDiv = this.format_colors(this.panelMarkup.headDiv),
        h3 = this.format_colors(this.panelMarkup.h3),
        contentDiv = this.panelMarkup.contentDiv,
        closeDiv = '</div>',
        closeh3 = '</h3>',
        str = outerDiv;

        if(head)
            str += headDiv + h3 + head + closeh3 + closeDiv;
        if(detail)
            str += contentDiv + detail + closeDiv;
        str += closeDiv;
        return str;
    };
};

Panel.success = function(ctx, head, detail) {
    log("success: " + head + ": " + detail);
    var panel = new Panel(PanelColors.Success).render(head, detail);
    sendChat('', '/direct ' + panel);
};

Panel.warning = function (ctx, head, detail) {
    log("warning: " + head + ": " + detail);
    var panel = new Panel(PanelColors.Warning).render(head, detail);
    sendChat('', '/direct ' + panel);
};

Panel.info = function (ctx, head, detail) {
    log("info: " + head + ": " + detail);
    var panel = new Panel(PanelColors.Info).render(head, detail);
    sendChat('', '/direct ' + panel);
};

Panel.error = function (ctx, head, detail) {
    log("error: " + head + ": " + detail);
    var panel = new Panel(PanelColors.Error).render(head, detail);
    sendChat('', '/direct ' + panel);
};

Panel.player = function (ctx, head, detail) {
    var primary = utilGetPlayerColor(ctx.playerid),
    wheel = new KolorWheel(primary),
    pal = wheel.rel( 0, 0,[-20,30,40]),
    colors = new PanelColors(pal.get(1).getHex(), pal.get(0).getHex(), pal.get(2).getHex()),
    panel = new Panel(colors).render(head, detail);
    sendChat(ctx.who, '/direct ' + panel);
}

// }}}

// {{{ Cortex General Commands

function cortexSystemCheck(ctx) {

    var resp = '<ul>';
    // check macros exist
    var macro_missing = false;
    _.each(cpCONSTANTS.poolMACROS, function(m) {
        var existing = findObjs({_type: "macro", name: m.name});
        if( existing.length == 0 ) {
            macro_missing = true;
            return;
        }
    });
    // check GM handout exists
    var handouts = findObjs({_type:"handout", name: cpCONSTANTS.gmlistHANDOUT});
    if(handouts.length == 0 ) {
        resp += format("<li>Handout %s is missing</li>", cpCONSTANTS.gmlistHANDOUT);
    }

    var everything_ok = !macro_missing && handouts.length != 0;
    if(everything_ok)
        resp += 'Everything looks ok!';

    resp += '</ul>';

    if( everything_ok )
        Panel.success(ctx, "Cortex Plus Engine", resp);
    else
        Panel.error(ctx, "Cortex Plus Engine", resp);
}

function cortexCreateMacros(ctx) {
    log("cortexCreateMacros");
    var gms = utilGetGMList(ctx);
    if(!gms) return;

    var gmid = gms[0];
    _.each(cpCONSTANTS.poolMACROS, function(m) {
        var existing = findObjs({_type: "macro", name: m.name});
        if( existing.length > 0 ) {
            log("macro: " + m.name + " exists");
            return;
        }
        m['_playerid'] = gmid;
        createObj("macro", m);
        log("macro: " + m.name + " created");
    });
}

function cortexGetMacros(ctx) {
    log("cortexGetMacros");
    var macros = findObjs({_type: "macro"});
    log(macros);
}

function cortexResetState(ctx) {
    log("cortexResetState");
    state.pools = {};
    state.cmdStack = {};
    state.tokens = {};
    state.tokens.lookup = {};
    state.tokens.groups = {};
    Panel.success(ctx, "Cortex Plus Engine", "Cortex Plus Engine has been reset");
}

// }}}

// {{{ Dice Pool Commands

function poolSetupState() {
    if( !state.pools ) {
        state.pools = {};
    }
    if( !state.cmdStack ) {
        state.cmdStack = {};
    }
}

function poolGetCmdStack(playerid) {
    if( !state.cmdStack[playerid] ) {
        state.cmdStack[playerid] = new Array();
    }
    return state.cmdStack[playerid];
}

function poolPushCmd(playerid, cmd) {
    poolGetCmdStack(playerid).push(cmd);
    return cmd;
}

function poolPopCmd(playerid) {
    return poolGetCmdStack(playerid).pop();
}

function poolFetch(playerid) {
    if( !state.pools[playerid] ) {
        state.pools[playerid] = [];
    }
    return state.pools[playerid];
}

function poolClear(playerid) {
    var pool = poolFetch(playerid);
    utilEmpty(pool);
}

function formatDie(die) {
    return "d" + die.value + " " +die.label;
}

function formatDieMarkup(die) {
    var markup = '<div data-origindex="0" class="diceroll dVALUE" style="display:block"><div class="dicon"><div class="didroll" style="font-weight: normal">VALUE</div><div class="backing"></div></div><span>LABEL</span></div>';
    if(die.label.length == 0)
        die.label = ' ';
    return markup.replace(/VALUE/g, die.value).replace(/LABEL/g, die.label);
}

function formatDieRoll(die) {
    if( die.label.length > 0 )
        return "1d"+die.value + "[" + die.label+"]";
    else
        return "1d"+die.value;
}

function poolCommandError(argv, msg) {
    Panel.error(msg, "Sorry, Command not understood");
}

function poolCommandClear(argv, msg) {
    log("pool clear");
    var oldpool = poolFetch(msg.playerid).slice(); // make a copy
    poolClear(msg.playerid);
    poolSay(msg, "Your dice pool is now empty.");
    poolPushCmd(msg.playerid, {type:'clear', pool: oldpool, silent: msg.silent});
}

function poolSay(ctx, head, body) {
    if(ctx.silent)
        sendChat("Dice Pool", '/w ' + ctx.who + ' ' + head + ": " + (!body ? ' ' : body) );
    else
        Panel.player(ctx, head, body);
}

function poolCommandShow(argv, msg) {
    log("showPool");
    var pool = poolFetch(msg.playerid);
    if( pool.length == 0 ) {
        poolSay(msg, "Your dice pool is empty.");
        return;
    }
    var response = [];
    _.each(pool, function(die) {
        if( msg.silent )
            response.push(formatDie(die));
        else
            response.push(formatDieMarkup(die));
    });
    response = msg.silent ? response.join(", ") : response.join("");
    poolSay(msg, "Your Dice Pool", response);
}

function poolCommandAdd(argv, ctx) {
    log("addPool");
    var dice_str= argv[0];
    var dice_re = dice_str.match(/^(?:([0-9]*)d)?([0-9]+|%)$/);
    if(!dice_re) {
        poolSay(ctx, "ERROR: This isn't a die: " + argv[0]);
        return;
    }
    log(dice_re);
    if(dice_re[1] != null && dice_re[1] > 1) {
        poolSay(ctx, "ERROR: You can only add 1 dice (e.g, 1d4, not 2d4)");
        return;
    }
    var value = Number(dice_re[2]);
    if(!value) {
        poolSay(ctx, "ERROR: This isn't valid: " + argv[0]);
        return;
    }
    argv.shift();
    var label = '';
    if( argv.length > 0 ) {
        label = argv.join(" ");
    }
    var die = {'label': label, 'value':value};
    var pool = poolFetch(ctx.playerid);
    pool.push(die);
    poolCommandShow(argv, ctx);
    poolPushCmd(ctx.playerid, {type: 'add', die: die, silent: ctx.silent});
}

function poolCommandRoll(argv, ctx) {
    log("roll pool");
    var pool = poolFetch(ctx.playerid);
    if( pool.length == 0 ) {
        poolSay(ctx, "Your dice pool is empty.");
        return;
    }
    var keep = 2;
    if( argv.length == 1 )
        keep = Number(argv[0]);

    var roll_args = [];
    _.each(pool, function(die) {
        roll_args.push(formatDieRoll(die));
    });
    var roll_cmd = "/roll {" + roll_args.join(" + ") + "}k" + keep;
    var roll_cmdi = "/roll {" + roll_args.join(" + ") + "}k" + keep;
    Panel.player(ctx, "Rolling...");
    sendChat(ctx.who, roll_cmd);
}

function poolCommandUndo(argv, ctx) {
    var cmd = poolPopCmd(ctx.playerid);
    if(!cmd) {
        Panel.player(ctx, "Nothing to Undo");
        return;
    }
    switch(cmd.type) {
        case 'add':
            poolFetch(ctx.playerid).pop();
            ctx.silent = cmd.silent;
            poolCommandShow(argv, ctx);
        break;
        case 'clear':
            ctx.silent = cmd.silent;
            Array.prototype.push.apply(poolFetch(ctx.playerid), cmd.pool);
            poolCommandShow(argv, ctx);
        break;
    }
}

// }}}

// {{{ Token Commands

function tokenSetupState() {
    if( !state.tokens ) {
        state.tokens = {};
        state.tokens.lookup = {};
        state.tokens.groups = {};
    }
}

function tokenCommandError(argv, msg) {
    sendChat("Error", "bad command.");
}

function tokenImage(value) {
    switch (value) {
        case 4:
            return cpCONSTANTS.tokenD4;
        case 6:
            return cpCONSTANTS.tokenD6;
        case 8:
            return cpCONSTANTS.tokenD8;
        case 10:
            return cpCONSTANTS.tokenD10;
        case 12:
            return cpCONSTANTS.tokenD12;
    }
    return false;
}

function getFromId(id) {
    var obj = getObj('graphic', id);
    if( obj === undefined )
        obj = getObj('text', id);
    if( obj === undefined )
        log("ERROR: can't find object: "+id);
    return obj;
}

function tokenGroupAdd(objects) {
    var groupid = objects.join('-');
    log("new groupid: " + groupid);
    _.each(objects, function(id) {
        state.tokens.lookup[id] = groupid;
    });
    state.tokens.groups[groupid] = objects;
    return groupid;
}

function tokenGroupsClear() {
    state.tokens.groups = {};
    state.tokens.lookup = {};
}

function tokenGroupDestroy(obj_id, groupid) {
    log('tokenGroupDestroy');
    var group = state.tokens.groups[groupid];
    _.each(group, function(id) {
        log('deleting: ' + id);
        delete state.tokens.lookup[id];
    });
    log('deleting group: ' + groupid);
    delete state.tokens.groups[groupid];
}

function tokenGroupMove(obj, prev, groupid) {
    log('tokenGroupMove');
    var group = state.tokens.groups[groupid];
    _.each(group, function(id) {
        if(id == obj.get('_id'))
            return;
        log("moving for: " + id);
        var token = getFromId(id);

        var dx = prev['left'] - token.get('left');
        var dy = prev['top'] - token.get('top');

        var newx = dx < 0 ? obj.get('left')-dx : obj.get('left')+dx ;
        var newy = obj.get('top')+dy;

        token.set('left', newx);
        token.set('top', newy);
    });
}

function fetchAvatarForPlayer(playerid) {
    log("fetchAvatarForPlayer: " + playerid);

    var chars = findObjs({
        _type: "character",
        controlledby: playerid
    });

    var avatars = null;
    _.each(chars, function(toon) {
        avatars = findObjs({
            _pageid: Campaign().get("playerpageid"),
            _type: "graphic",
            represents: toon("_id")
        });
    });
    avatars = _.reject(avatars, function(toon) { toon == null; });
    return avatars;
}

function tokenFindNamedTokens(playerid, name) {
    log("tokenFindNamedToken: " + playerid +", " + name);
    var tokens = findObjs({
        _pageid: Campaign().get("playerpageid"),
        _type: "graphic",
        controlledby: playerid,
        name: name
    });
    // tokens = _.reject(tokens, function(t) { t == null; });
    return tokens;
}

function tokenCommandClearGroups(argv, msg) {
    log('tokenCommandClearGroups');
    tokenGroupsClear();
}

function tokenCommandAdd(argv, msg) {
    log("tokenCommandAdd");
    if(argv.length <= 2) {
        Panel.error(msg, "Token Error", "Can't add token. Arguments are missing.");
        return;
    }
    var type = argv[0]
    var type_known = (type == "complication" || type == "asset");
    argv.shift();
    var value = argv[0];
    value = value.match(/(?:\d+d)?(\d+)/);
    if(!value) {
        Panel.error(msg, "Token Error", "This isn't a die: " + argv[0]);
        return;
    }
    log("matched: " + value[1]);
    value = Number(value[1]);
    argv.shift();
    var label = '';
    if( argv.length > 0 ) {
        label = argv.join(" ");
    }
    var token_data = {'label': label, 'value':value};
    var img = tokenImage(token_data.value);
    if(!img) {
        Panel.error(msg, "Token Error", "Invalid dice value: " + token_data.value);
        return;
    }
    if( token_data.label.length == 0 ) {
        Panel.error(msg, "Token Error", "Missing token name");
        return;
    }

    var posx = null;
    var posy = null;
    var card = null; // will be sent back to preserve order
    if(!type_known) {
        var avatars = fetchAvatarForPlayer(msg.playerid);
        if(avatars.length == 0 && msg.selected && msg.selected.length == 0) {
            Panel.error(msg, "Token Error", "You don't have a destination selected nor an avatar on the table.");
            return;
        }
        var destination = null;
        if( avatars.length == 0 ) {
            destination = getObj(msg.selected[0]['_type'], msg.selected[0]['_id']);
        }
        else
            destination = avatars[0];

        posx = destination.get("left");
        posy = destination.get("top");
    } else {
        if(type == "asset") {
            var asset_cards = tokenFindNamedTokens(msg.playerid, "assets");
            if(asset_cards.length == 0) {
                Panel.error(msg, "Token Error", "Where is your Assets card?");
                return;
            }
            card = asset_cards[0];
        } else if(type == "complication") {
            var complication_cards = tokenFindNamedTokens(msg.playerid, "complications");
            if(complication_cards.length == 0) {
                Panel.error(msg, "Token Error", "Where is your Complications card?");
                return;
            }
            card = complication_cards[0];
        }

        posx = (card.get("left") - card.get("width")/2) + 40 + 5;
        posy = (card.get("top") - card.get("height")/2) + 40 + 20;
    }

    var token = createObj("graphic", {
        imgsrc:  img,
        pageid: Campaign().get("playerpageid"),
        layer: 'objects',
        bar1_value: token_data.value,
        left: posx,
        top: posy,
        width: 40,
        height: 40,
        controlledby: 'all',
        name: token_data.label,
    });
    var text = createObj("text", {
        text: token_data.label,
        pageid: Campaign().get("playerpageid"),
        layer: 'objects',
        font_size: 18,
        font_family: 'Patrick Hand',
        controlledby: "all",
        left: 0,
        top: 0,
    });
    text.set('left', posx+40 +20);
    text.set('top', token.get('top'));
    var group = [token.get('_id'),text.get('_id')];
    tokenGroupAdd(group);
}

// }}}

// {{{ Command Processing

var processCommands = function(argv, ctx) {
    log("processCommands: " + argv);
    log("processCommands: " + ctx.who);

    var script = argv.shift().toLowerCase();
    if(argv[0])
        argv[0] = argv[0].toLowerCase();
    log("argv[0]: '" + argv[0]+"'");
    ctx.silent = false;
    switch(script) {
        case '!dim':
            var o = getObj(ctx.selected[0]['_type'], ctx.selected[0]['_id'])
            log(o.get('width'), o.get('height'))
        break;
        case cpCONSTANTS.cortexCOMMAND:
            switch(argv[0]) {
            case "setup":
                if( isGM(ctx) ) cortexCreateMacros(ctx);
            case "reset":
                if( isGM(ctx) ) cortexResetState(ctx);
            break;
        }
        break;
        case cpCONSTANTS.poolCOMMAND:
            switch(argv[0]) {
            case "adds":
                ctx.silent = true;
            case "add":
                argv.shift();
                poolCommandAdd(argv, ctx);
            break;
            case "clear":
                argv.shift();
                poolCommandClear(argv, ctx);
            break;
            case "shows":
                ctx.silent = true;
            case "show":
                argv.shift();
                poolCommandShow(argv, ctx);
            break;
            case "roll":
                argv.shift();
                poolCommandRoll(argv, ctx);
            break;
            case "undo":
                poolCommandUndo(argv, ctx);
            break;
            default:
                poolCommandError(argv, ctx);
            break;
        }
        break;
        case cpCONSTANTS.tokenCOMMAND:
            switch(argv[0]) {
            case "add":
                argv.shift();
                tokenCommandAdd(argv, ctx);
            break;
            case "cleargroups":
                if( isGM(ctx) ) tokenCommandClearGroups(argv, ctx);
            break;
            default:
                tokenCommandError(argv, ctx);
            break;
        }
        break;
    }
};

// }}}

// {{{ Event Handling

on("chat:message", function(msg) {
    var chatCommand = msg.content;

    var argv = chatCommand.split(' ');
    if (msg.type != 'api') {
        log("api message");
        return;
    }
    return processCommands(argv, msg);
});


on("ready", function() {
    log("campaign ready");
    poolSetupState();
    tokenSetupState();
});

function onGenericChange(obj, prev) {
    var groupid = state.tokens.lookup[obj.get('_id')]
    log(groupid);
    log(state.tokens.lookup);
    return;
    if(groupid)
        tokenGroupMove(obj, prev, groupid);
}

function onGenericDestroy(obj) {
    var groupid = state.tokens.lookup[obj.get('_id')]
    log(groupid);
    log(state.tokens.lookup);
    if(groupid)
        tokenGroupDestroy(obj.get('_id'), groupid);
}

on("change:text", function(obj, prev) {
    log('change:text');
    onGenericChange(obj, prev);
});
on("change:graphic", function(obj, prev) {
    log('change:graphic');
    onGenericChange(obj, prev);
});

on("destroy:text", function(obj) {
    log('destroy:text');
    onGenericDestroy(obj);
});
on("destroy:graphic", function(obj) {
    log('destroy:graphic');
    onGenericDestroy(obj);
});

// }}}

// {{{ Hackyity hack hacks
(function() {
    var oldCreateObj = createObj;
    createObj = function() {
        var obj = oldCreateObj.apply(this, arguments);
        if (obj && !obj.fbpath) {
            obj.fbpath = obj.changed._fbpath.replace(/([^\/]*\/){4}/, "/");
        }
        return obj;
    }
}())

// }}}
}())

