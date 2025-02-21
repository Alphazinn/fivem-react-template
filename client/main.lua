local function OpenUI(Action, Data)
    SetNuiFocus(true, true)
    SendNUIMessage({
        Action = Action,
        Data = Data
    })
end

RegisterCommand("reacttest", function(source, args)
    if args[1] == "Input" then
        local Message = table.concat(args, " ", 2)
        OpenUI("Input", {
            PlaceholderText = Message,
            --- ...
        })
    end
end, false)

RegisterNUICallback("CloseUI", function(data, cb)
    SetNuiFocus(false, false)
    if data then
        print("Input value received: " .. data.value)
    end
    cb({})
end)
