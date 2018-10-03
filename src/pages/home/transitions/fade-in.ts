import { Animation, PageTransition } from 'ionic-angular';

export class ModalFadeInTransition extends PageTransition {

public init() {
    const ele = this.enteringView.pageRef().nativeElement;
    const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));

    wrapper.beforeStyles({ 'transform': 'scale(1.0)', 'opacity': 0 });
    wrapper.fromTo('transform', 'scale(1.0)', 'scale(1.0)');
    wrapper.fromTo('opacity', 0, 1);

    this
        .element(this.enteringView.pageRef())
        .duration(200)
        .easing('cubic-bezier(0.4, 0, 1.0, 1.0)')
        .add(wrapper);
}
}