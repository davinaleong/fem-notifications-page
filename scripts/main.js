console.log(`main.js loaded`)

const badgeEl = document.querySelector(`[data-element="badge"]`)
const cardBodyEl = document.querySelector(`[data-element="card-body"]`)
let cardBodyHtml = ``

badgeEl.innerHTML = notifications.filter(notification => notification.read === 0).length

notifications.forEach(notification => {
    const { read, type, date, content, sender } = notification

    const dataRead = read ? `data-read="true"` : `data-read="false"`
    let notificationTitle = `<a href="#" class="link-user">${sender.name}</a> ${type.message}`;
    if (content.title) {
        notificationTitle += ` <a href="#" class="link-notification">${content.title}</a>`
    }
    const notificationContent = content.description ? `<div class="notification__content">
            <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
          </div>` : ``

    cardBodyHtml += `
        <div class="notification" ${dataRead}>
          <div class="notification__avatar">
            <img src="${sender.avatar}" alt="">
          </div>
          <div class="notification__heading">
            <p class="notification__heading__title">${notificationTitle}</p>
            <p class="notification__heading__date">${date}</p>
          </div>
          ${notificationContent}
        </div>
    `
})

cardBodyEl.innerHTML = cardBodyHtml