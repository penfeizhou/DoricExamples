
import { Color, Gravity, hlayout, layoutConfig, stack } from "doric"
import * as PubTool from "../PubTool"

/// 水平线性布局容器控件
export function ui() {

    let cyanView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )

    let redView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.RED
        }
    )

    return stack(
        [
            hlayout([
                cyanView,
                redView,
            ],{
                space: 10,
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().most()
            }),
        ],
        {
            width: 240,
            height: 160,
            layoutConfig: layoutConfig().justWidth().justHeight().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {

    return `
    /// 水平线性布局容器控件
    export function ui() {
    
        let cyanView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.CYAN
            }
        )
    
        let redView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.RED
            }
        )
    
        return stack(
            [
                hlayout([
                    cyanView,
                    redView,
                ],{
                    space: 10,
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().most()
                }),
            ],
            {
                width: 240,
                height: 160,
                layoutConfig: layoutConfig().justWidth().justHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `
}