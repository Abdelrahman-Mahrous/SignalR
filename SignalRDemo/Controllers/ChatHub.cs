using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SignalRDemo.Controllers
{
    public class ChatHub :Hub
    {
   

        public async Task SendMessage (string user , string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
        public async Task SendTime()
        {
            var dt = DateTime.Now;           
            await Clients.All.SendAsync("DT",dt);
        }



    }
}
