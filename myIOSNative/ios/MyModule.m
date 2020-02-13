//
//  MyModule.m
//  myIOSNative
//
//  Created by Richard on 2020/1/9.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "MyModule.h"
#import <React/RCTLog.h>

@implementation MyModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(setNavSwipe:(BOOL)canswipe){
  
  dispatch_async(dispatch_get_main_queue(), ^{
    //獲取當前顯示的navigationController 然後根據RN傳過来的canswipe參數决定是否禁止側滑返回
    [self getCurrentVC].navigationController.interactivePopGestureRecognizer.enabled = canswipe;
  });
  
}

@end
