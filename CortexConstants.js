// vim:fdm=marker
// {{{ Cortex Plus Constants
var cpCONSTANTS = {
    /* Edit these URLs to point to your dice assets */
    tokenD4: "https://s3.amazonaws.com/files.d20.io/images/3908534/h8snbjLuxlVqawSzCsKs5A/thumb.png?1398993124",
    tokenD6: "https://s3.amazonaws.com/files.d20.io/images/3907733/MDN2yejuiQS52A-8NECVkg/thumb.png?1398988459",
    tokenD8: "https://s3.amazonaws.com/files.d20.io/images/3908533/K3qv6LrN-3Cs3kU1zFIHOg/thumb.png?1398993124",
    tokenD10: "https://s3.amazonaws.com/files.d20.io/images/3908531/ptUfuaVxrtPno1K8RG3X-A/thumb.png?1398993123",
    tokenD12: "https://s3.amazonaws.com/files.d20.io/images/3908532/SCvdCztxZaHmQxLzLotgag/thumb.png?1398993123",

    // The players who can control this handout are considered GMs
    gmlistHANDOUT : "GM-LIST",

    cortexCOMMAND : "!cortex",
    poolCOMMAND : "!pool",
    tokenCOMMAND : "!token",
    complicationCOMMAND : "!complication",
    assetCOMMAND : "!asset",

    // The Macros available to players
    poolMACROS: [{
        "name": "Pool:Roll",
        "action": "!pool roll",
        "istokenaction": false,
        "visibleto": "all",
        "_type": "macro",
    },
    {
        "name": "Add-To-Pool",
        "action": "!pool add @{selected|bar1} @{selected|token_name}",
        "istokenaction": true,
        "visibleto": "all",
        "_type": "macro",
    },
    {
        "name": "Pool:Undo",
        "action": "!pool undo",
        "istokenaction": false,
        "visibleto": "all",
        "_type": "macro",
    },
    {
        "name": "Pool:Clear",
        "action": "!pool clear",
        "istokenaction": false,
        "visibleto": "all",
        "_type": "macro",
    },
    {
        "name": "Pool:Show",
        "action": "!pool show",
        "istokenaction": false,
        "visibleto": "all",
        "_type": "macro",
    },
    {
        "name": "Pool:Add",
        "action": "!pool add ?{Die Value} ?{Name}",
        "istokenaction": false,
        "visibleto": "all",
        "_type": "macro",
    },
    {
        "name": "Token:Add",
        "action": "!token add generic ?{Die Value} ?{Name}",
        "istokenaction": false,
        "visibleto": "all",
        "_type": "macro",
    },
    {
        "name": "Complication:Add",
        "action": "!token add complication ?{Die Value} ?{Name}",
        "istokenaction": false,
        "visibleto": "all",
        "_type": "macro",
    },
    {
        "name": "Asset:Add",
        "action": "!token add asset ?{Die Value} ?{Name}",
        "istokenaction": false,
        "visibleto": "all",
        "_type": "macro",
    },
    {
        "name": "GM-Pool:Add",
        "action": "!token add asset ?{Die Value} ?{Name}",
        "istokenaction": false,
        "visibleto": "",
        "_type": "macro",
    },
    {
        "name": "GM-Pool:Show",
        "action": "!pool shows",
        "istokenaction": false,
        "visibleto": "",
        "_type": "macro",
    }],
};
// }}}
