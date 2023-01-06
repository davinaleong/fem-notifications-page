console.log(`main.js loaded`)

const notificationsCopy = notifications.slice()

const badgeEl = document.querySelector(`[data-element="badge"]`)
const cardBodyEl = document.querySelector(`[data-element="card-body"]`)
const btnMarkReadEl = document.querySelector(`[data-element="btn-mark-read"]`)

renderHtml(badgeEl, cardBodyEl)

btnMarkReadEl.addEventListener(`click`, (event) => {
  notificationsCopy.forEach(notification => notification.read = true)

  renderHtml(badgeEl, cardBodyEl)
})

function renderHtml(badgeEl, cardBodyEl) {
  let cardBodyHtml = ``

  badgeEl.innerHTML = notificationsCopy.filter(notification => notification.read === false).length

  notificationsCopy.forEach(notification => {
    const { read, type, date, content, sender } = notification

    const dataRead = read ? `data-read="true"` : `data-read="false"`
    
    let notificationTitle = `<a href="#" class="link-user">${sender.name}</a> ${type.message}`;
    if (content.title) {
        const linkClass = (type === notificationTypes.joinedGroup || type === notificationTypes.leftGroup) ? `link-group` : `link-notification`
        notificationTitle += ` <a href="#" class="${linkClass}">${content.title}</a>`
    }
    
    const notificationContent = content.description ? `<div class="notification__content">
            <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
          </div>` : ``

    let imageContent = ``
    let dataImage = `data-image="false"`
    if (content.image !== ``) {
      imageContent = `
        <a href="#" class="notification__image">
          <img src="${content.image}" alt="">
        </a>
      `
      dataImage = `data-image="true"`
    }

    cardBodyHtml += `
        <div class="notification" ${dataRead} ${dataImage}>
          <div class="notification__avatar">
            <img src="${sender.avatar}" alt="">
          </div>
          <div class="notification__heading">
            <p class="notification__heading__title"><span>${notificationTitle}</span></p>
            <p class="notification__heading__date">${date}</p>
          </div>
          ${imageContent}
          ${notificationContent}
        </div>
    `
  })

  cardBodyEl.innerHTML = cardBodyHtml

}