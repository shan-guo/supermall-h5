import {request} from "@/network/request";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = shopInfo.oldPrice;
        this.discount = shopInfo.discountDesc;
        this.columns = columns;
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}


export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.scpre = shopInfo.scpre;
        this.goodsCount = shopInfo.cGoods;
    }
}