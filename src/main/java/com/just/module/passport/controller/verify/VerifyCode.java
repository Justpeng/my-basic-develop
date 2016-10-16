package com.just.module.passport.controller.verify;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.Random;

/**
 * 验证码生成类
 *
 * @author:Just
 * @create:2016-09-30 21:23
 */
public class VerifyCode {
    //宽度
    private int width = 100;
    //高度
    private int height = 40;
    //验证码个数
    private int codeCount = 4 ;
    //干扰线个数
    private int lineCount = 15;
    //验证码
    private String code;
    //验证码序列
    private char[] codeSequence={
        '0','1','2','3','4','5','6','7','8','9',
        'a','b','c','d','e','f','g','h','i','j',
        'k','l','m','n','o','p','q','r','s','t',
        'u','v','w','x','y','z'
    };
    //随机函数
    private Random random = new Random();
    //内存图片
    BufferedImage bufferedImage = null;


    public VerifyCode (){
        this.createCode();
    }
    public VerifyCode(int width,int height,int codeCount,int lineCount){
        this.width  = width;
        this.height = height;
        this.codeCount = codeCount;
        this.lineCount = lineCount;
        this.createCode();
    }

    /**
     * 返回验证码
     * @return
     */
    public String getCode() {
        return code;
    }

    /**
     * 返回图片
     * @return
     */
    public BufferedImage getBufferedImage(){
        return bufferedImage;
    }

    private void createCode(){
        int fontWidth=0;//每个字符的宽度
        int fontHeight=0;//每个字符的高度
        fontHeight = height-5;
        fontWidth = width/(codeCount+3);

        //采用RGB颜色模式
        bufferedImage = new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
        //生成图片
        Graphics2D graphics2D = (Graphics2D) bufferedImage.getGraphics();
        //设置图片背景
        setBackGround(graphics2D);

        //设置字体
        graphics2D.setFont(new Font("", Font.BOLD,fontHeight));
        //绘制干扰线
        drawLine(graphics2D);

        StringBuilder builder = new StringBuilder();
        for (int i = 0; i <codeCount; i++) {
            String codeR = String.valueOf(codeSequence[random.nextInt(codeSequence.length)]);
            graphics2D.setColor(getRandomColor());
            graphics2D.drawString(codeR,(i+1)*fontWidth,getRandomNumber(height/2)+25);
            builder.append(codeR);
        }
        code = builder.toString();

    }

    /**
     * 设置背景色
     * @param graphics2D
     */
    public void setBackGround(Graphics2D graphics2D){
        graphics2D.setColor(Color.white);
        graphics2D.fillRect(0,0,width,height);
    }

    /**
     * 获取随机数
     * @param number
     * @return
     */
    public int getRandomNumber(int number){
        return random.nextInt(number);
    }

    /**
     * 获取随机颜色
     * @return
     */
    public Color getRandomColor(){
        int R = getRandomNumber(255);
        int G = getRandomNumber(255);
        int B = getRandomNumber(255);
        return new Color(R,G,B);
    }

    /**
     * 绘制干扰线
     * @param graphics2D
     */
    public void drawLine(Graphics2D graphics2D){
        for (int i = 0; i < lineCount; i++) {
            int x1 = getRandomNumber(width);
            int y1 = getRandomNumber(height);
            int x2 = getRandomNumber(width/8);
            int y2 = getRandomNumber(height / 8);
            graphics2D.setColor(getRandomColor());
            graphics2D.drawLine(x1,y1,x2,y2);
        }
    }



}
