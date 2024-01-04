import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, tap, throttleTime } from 'rxjs/operators';

export enum EBreakPoints {
  mobile = 380,
  tablet = 768,
  desktop = 922,
  large = 1200
}

export const MatchMediaQueries = {
  // "(min-width: 768px) and (max-width: 921px)"
  tabletOnly: `(min-width: ${EBreakPoints.tablet}px) and (max-width: ${EBreakPoints.desktop - 1}px)`,
  
  // "(min-width: 922px) and (max-width: 1199px)"
  desktopOnly: `(min-width: ${EBreakPoints.desktop}px) and (max-width: ${EBreakPoints.large - 1}px)`,
  
  // "(min-width: 1200px)"
  largeOnly: `(min-width: ${EBreakPoints.large}px)`,
  
  // "(min-width: 380px)"
  fromMobile: `(min-width: ${EBreakPoints.mobile}px)`,
  
  // "(min-width: 768px)"
  fromTablet: `(min-width: ${EBreakPoints.tablet}px)`,
  
  // "(min-width: 922px)"
  fromDesktop: `(min-width: ${EBreakPoints.desktop}px)`,
  

  // "(min-width: 1200px)"
  fromLarge: `(min-width: ${EBreakPoints.large}px)`,
  
  // "(max-width: 379px)"
  untilMobile: `(max-width: ${EBreakPoints.mobile - 1}px)`,
  
  // "(max-width: 767px)"
  untilTablet: `(max-width: ${EBreakPoints.tablet - 1}px)`,
  
  // "(max-width: 921px)"
  untilDesktop: `(max-width: ${EBreakPoints.desktop - 1}px)`,
  
  // "(max-width: 1199px)"
  untilLarge: `(max-width: ${EBreakPoints.large - 1}px)`
};

@Directive({
  selector: '[mediaQuery]'
})
export class MediaQueryDirective implements OnInit, OnDestroy {
  @Input() mediaQuery: string | undefined;

  private mediaQueryList: MediaQueryList | undefined;
  private isCreated: boolean | undefined;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<unknown>
  ) {}

  ngOnInit(): void {
    if (!this.mediaQuery) {
      return;
    }

    this.mediaQueryList = window.matchMedia(this.mediaQuery);

    fromEvent(this.mediaQueryList, 'change')
      .pipe(
        takeUntil(this.destroy$),
        throttleTime(400),
        tap((event: Event) => this.update((event as MediaQueryListEvent).matches))
      )
      .subscribe();

    this.update(this.mediaQueryList.matches);
  }

  update(matches: boolean): void {
    if (this.isCreated) {
      this.viewContainerRef.clear();
    }

    if (!matches) {
      return;
    }

    const ref = this.viewContainerRef.createEmbeddedView(this.templateRef);
    ref.markForCheck();
    this.isCreated = true;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}