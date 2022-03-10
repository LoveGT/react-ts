class Bus {
  public name = 'gao'  //公共的变量
  protected address = '湖南省' //受保护的变量
  private _list: any[] = []; //私有变量
  subscribe(cb: any) {
    this._list.push(cb);
  }
  dispatch() {
    this._list.forEach((cb: any) => {
      cb && cb();
    });
  }
}
let bus = new Bus()
export default {}